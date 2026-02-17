import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Amenities from "@/components/Amenities";
import FoodMenu from "@/components/FoodMenu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import {VideoGallery} from "@/components/VideoGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <Amenities />
      <FoodMenu />
      <Gallery />
      <VideoGallery/>
      <Testimonials />
      <Contact />
    </>
  );
}
