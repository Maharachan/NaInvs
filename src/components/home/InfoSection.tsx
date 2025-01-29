import { Card } from '@/components/home/Card'

const InfoSection = () => {
  return (
    <section className=" -mt-32" id="what-we-do">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                title="Digital Consultancy & Digital Marketing"
                label="ONE PART"
                description="We provide expert guidance to help you navigate complex digital landscapes, streamline operations, and implement strategies that drive measurable results."
                onClick={() => {
                  window.location.href = '#digital-consultancy';
                }}
              />
              <Card
                title="Venture Studio"
                label="TWO PART"
                description="We turn ideas into reality by incubating and launching innovative ventures, partnering with entrepreneurs to create scalable and impactful businesses."
                onClick={() => {
                  window.location.href = '#joint-venture-studio';
                }}
              />
              
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Our innovative</span> approach empowers businesses to harness cutting-edge technology, outpace competitors, and build future-ready, sustainable business models.
              </h2>
            </div>
          </div>
        </div>
      </section>
  )
}

export default InfoSection