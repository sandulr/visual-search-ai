// app/page.tsx
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import LiveDemoMock from "@/components/LiveDemoMock";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <HowItWorks />
        <TechStack />
        <LiveDemoMock />
      </div>
      <Footer />
    </main>
  );
}



