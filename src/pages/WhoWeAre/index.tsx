import HeroSection from "@/components/whoweare/HeroSection"
import Stats from "@/components/whoweare/Stats"
import ProfileSection from "@/components/whoweare/ProfileSection"

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <HeroSection />
    <Stats />
    <ProfileSection />
    </div>
  )
}

export default WhoWeAre