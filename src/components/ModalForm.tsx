import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ModalForm({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Validate environment variables
  if (!web3formsKey) {
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
          from_name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          subject: "New Contact Form Submission"
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        form.reset()
        // Optionally close modal after successful submission
        setTimeout(() => {
          closeModal()
        }, 2000)
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

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 hero-bg z-40"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row animate-in fade-in duration-300">
          {/* Close button */}
          <button 
            onClick={closeModal}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Left side - Title */}
          <div className="flex-1 p-6 md:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left">
              Let&apos;s start a<br />project<br />together
            </h1>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 p-6 md:p-8 lg:p-12 bg-white">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={web3formsKey} />

              {/* Success/Error messages */}
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

              {/* Form fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

