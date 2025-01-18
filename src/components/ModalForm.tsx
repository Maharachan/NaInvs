import { X } from 'lucide-react'
import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function ModalForm({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const hcaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY

  // Validate environment variables
  if (!web3formsKey || !hcaptchaSiteKey) {
    console.error('Missing required environment variables')
    return null
  }

  const closeModal = () => {
    onClose()
    // Reset form state when closing
    setSubmitStatus('idle')
  }

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    
    if (!captchaToken) {
      alert('Please complete the captcha')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          'h-captcha-response': captchaToken
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        // Reset form and captcha safely
        form.reset()
        if (captchaRef.current) {
          try {
            captchaRef.current.resetCaptcha()
          } catch (error) {
            console.warn('Failed to reset captcha:', error)
          }
        }
        setCaptchaToken(null)
      } else {
        setSubmitStatus('error')
        console.error('Submission failed:', data)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
  }

  const onCaptchaExpire = () => {
    setCaptchaToken(null)
  }

  return (
    <div className="fixed inset-0 hero-bg flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl min-h-[600px] relative flex flex-col md:flex-row">
        <button 
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex-1 p-8 flex items-center justify-center md:p-16">
          <h1 className="text-5xl font-bold leading-tight">
            Let&apos;s start a<br />project<br />together
          </h1>
        </div>

        <div className="flex-1 p-8 md:p-16">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              type="hidden" 
              name="access_key" 
              value={web3formsKey}
            />

            {/* Show success/error messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                Something went wrong. Please try again later.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <HCaptcha
                ref={captchaRef}
                sitekey={hcaptchaSiteKey}
                onVerify={onCaptchaVerify}
                onExpire={onCaptchaExpire}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !captchaToken}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

