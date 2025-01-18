import { useState } from 'react';
import LadderSteps from './ladder-steps';


const InfoSection = () => {
  const [activeSection, setActiveSection] = useState<'tech-partner' | 'joint-venture'>('tech-partner');

  const renderTechPartnerContent = () => (
    <>
      {/* Product Strategy Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Product Strategy Workshop</h2>
          <p className="text-gray-600">
            Validate the problem to identify, document and prioritize the feature
            requirements in order to create the most effective product roadmap
          </p>
        </div>
        <div>
         <LadderSteps />
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">User Research</h3>
          <p className="text-gray-600">
            Understand, empathize, and validate user problems & ideas
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <path d="M9 14l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Product/Process Audit
          </h3>
          <p className="text-gray-600">
            Audit current product, identify bottlenecks and barriers
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Competitor Analysis
          </h3>
          <p className="text-gray-600">
            Comparing competitors to formulate superior experiences
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Workflows</h3>
          <p className="text-gray-600">
            Map out the user journey through the product
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Prototype</h3>
          <p className="text-gray-600">
            Visual depiction of the newly created product experience
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="w-12 h-12 mb-4">
            <svg
              className="w-full h-full text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
              <path d="M12 11v6" />
              <path d="M9 14h6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Product Roadmap</h3>
          <p className="text-gray-600">
            Blueprint in an agile sprint fashion to go to market
          </p>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-50 p-12 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-12">Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Project Market Assessment and Rapid Prototyping
            </h3>
            <p className="text-gray-600">
              You bring the business hypothesis and we'll test, validate,
              and refine the market opportunity, collaboratively design
              the right product or service, and build the first minimum
              viable product within 12 weeks
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Collaborative Managed Teams
            </h3>
            <p className="text-gray-600">
              We partner with you to understand your business, while
              pairing local experts with global teams, enabling us to
              deliver digital solutions through highly collaborative
              engagements with capital efficiency
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              3D Digital Product Creation
            </h3>
            <p className="text-gray-600">
              We get your product to shelf faster, eliminating wasted time
              and resources; cutting time to market by 75% across all
              general merchandising categories with virtual product
              development
            </p>
          </div>
        </div>
      </div>

      {/* Project Execution Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Project Execution Sprints
        </h2>
        <p className="text-gray-600 mb-8">
          Implement the product roadmap through handcrafted design,
          methodical development, through a series of agile sprints to
          bring ideas to life.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 12h8" />
            </svg>
            Wireframes
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            High Fidelity Visuals
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
            </svg>
            Lean, Scalable Code
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Cloud Management
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            Manual, Automated Testing
          </span>
        </div>
      </div>
    </>
  );

  const renderJointVentureContent = () => (
    <>
      {/* Requirements Section */}
      <div className="mb-16">
        <p className="text-gray-600 mb-8">
          Strategically embedded tech partner that will be there for the long run. If you are...
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">A Startup</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Solving interesting problems with domain expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Accessible distribution channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Looking for a strategic tech partner</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">An Enterprise</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Facing tech based challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Innovation minded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-600 shrink-0"></span>
                <span>Interested in intellectual property and seeking new revenue opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-50 p-12 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-12">Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">0-100 Pro Forma Joint Ventures</h3>
            <p className="text-gray-600">
              We partner with startups and enterprise clients to create new revenue opportunities through unique experiences, services and products
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Strategic Partnerships</h3>
            <p className="text-gray-600">
              We partner with startups and enterprise clients to create new revenue opportunities through unique experiences, services and products
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Our Process</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Assessment of compatibility</h3>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Analysis of partnership scope</h3>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Final production phase & ongoing support through company lifecycle</h3>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="-mt-32 pb-16" id="what-we-do">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          {/* Mission & Vision Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              At Nainvs, we empower businesses by delivering innovative digital solutions 
              and creating ventures that solve real-world problems. Our mission is to drive growth, 
              inspire innovation, and turn bold ideas into successful businesses.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We envision a future where businesses of all sizes thrive through innovation 
              and entrepreneurship. As a global leader in digital transformation and venture 
              creation, Nainvs aims to shape the next generation of successful enterprises.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Digital Consultancy</h3>
              <p className="text-gray-600">
                We provide expert guidance to help you navigate complex digital landscapes, 
                streamline operations, and implement strategies that drive measurable results.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                From crafting engaging campaigns to building your brand's online presence, 
                we design marketing strategies that captivate audiences and fuel growth.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Venture Studio</h3>
              <p className="text-gray-600">
                We turn ideas into reality by incubating and launching innovative ventures, 
                partnering with entrepreneurs to create scalable and impactful businesses.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategic Vision</h3>
                <p className="text-gray-600">
                  We align our solutions with your goals, ensuring a clear path to success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Creative Excellence</h3>
                <p className="text-gray-600">
                  Our team blends creativity with technology to deliver unique and effective outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">End-to-End Support</h3>
                <p className="text-gray-600">
                  Whether you're scaling an existing business or launching a new venture, 
                  we're with you at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Service Details Navigation */}
          <div className="mt-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div 
                className={`p-8 rounded-lg cursor-pointer transition-all ${
                  activeSection === 'tech-partner' 
                    ? 'border-2 border-blue-400 bg-blue-50' 
                    : 'border'
                }`}
                onClick={() => setActiveSection('tech-partner')}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Digital Solutions & Consultancy
                </h2>
                <p className="text-gray-600">
                  Creating superior experiences and enabling greater business impact
                  through strategically integrated digital and AI offerings
                </p>
              </div>
              <div 
                className={`p-8 rounded-lg cursor-pointer transition-all ${
                  activeSection === 'joint-venture' 
                    ? 'border-2 border-blue-400 bg-blue-50' 
                    : 'border'
                }`}
                onClick={() => setActiveSection('joint-venture')}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Venture Studio
                </h2>
                <p className="text-gray-600">
                  Partnering on innovative investments; turning domain insights and
                  distribution advantages into extraordinary revenue opportunities
                </p>
              </div>
            </div>

            {/* Render existing content based on active section */}
            {activeSection === 'tech-partner' ? renderTechPartnerContent() : renderJointVentureContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
