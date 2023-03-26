import AboutSection from "../components/AboutSection";
import IndexFeaturedHeader from "../components/Layout/IndexFeatureHeader";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <IndexFeaturedHeader />
      <AboutSection />
    </>
  )
}
