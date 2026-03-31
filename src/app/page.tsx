import Hero from "@/components/Hero";
import HighlightReel from "@/components/sections/HighlightReel";
import TheNumbers from "@/components/sections/TheNumbers";
import PhotoGrid from "@/components/sections/PhotoGrid";
import LatestJournal from "@/components/sections/LatestJournal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightReel />
      <TheNumbers />
      <PhotoGrid />
      <LatestJournal />
      <Footer />
    </main>
  );
}
