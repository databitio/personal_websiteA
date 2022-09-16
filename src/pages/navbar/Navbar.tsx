import InfoSection from "./NavInfoSection";
import NavUserSection from "./NavUserSection";

const Navbar = () => {
  return (
    <section className="w-full h-[75px] text-neutral-200 text-xl fixed z-30 bg-transparent flex flex-row items-center justify-between">
      <NavUserSection />
      <InfoSection />
    </section>
  );
};

export default Navbar;
