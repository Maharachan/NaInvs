import ProfileCard from './ProfileCard'
import naresh from '@/assets/images/Naresh-Gowda.jpeg'

const ProfileSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProfileCard name="Naresh Gowda" title="CEO" image={naresh} linkedinUrl="https://www.linkedin.com/in/nareshgowdadba/" />
      </div>
    </section>
  )
}

export default ProfileSection