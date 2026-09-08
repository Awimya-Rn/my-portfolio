import Taskbar from "@/components/Taskbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Taskbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
