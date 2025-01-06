import HeroImage from "../assets/images/hero_image.png";

function HomePage() {
  return (
    <div className="flex flex-col h-full col-span-12 gap-8 md:gap-12 lg:gap-16">
      <section
        style={{ backgroundImage: `url(${HeroImage})` }}
        className="relative w-full aspect-[21/9] rounded "
      />
    </div>
  );
}

export default HomePage;
