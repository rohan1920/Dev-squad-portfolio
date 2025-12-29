import CoverPage from '@/components/CoverPage'
import AboutSection from '@/components/AboutSection'
import TeamSection from '@/components/TeamSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import CodeSamplesSection from '@/components/CodeSamplesSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CoverPage />
      <AboutSection />
      <TeamSection />
      <SkillsSection />
      <ProjectsSection />
      <CodeSamplesSection />
      <ContactSection />
    </main>
  )
}

