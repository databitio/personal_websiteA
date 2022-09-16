const NavUserSection = () => {
  return (
    <button className="flex flex-row mx-4 text-md items-center relative">
      <img
        src={require("../../assets/IMG_7899.jpg")}
        className="w-[40px] h-[40px] object-contain border-neutral-200 border-[1px] bg-neutral-900 rounded-md"
      />
      <div className="mx-2">John McCain</div>
    </button>
  );
};

export default NavUserSection;

{
  /* <div
className={
  visible
    ? "flex flex-row items-center absolute right-[-200px] top-[30px] bg-neutral-800 rounded-md w-[350px] h-[200px] transition-all"
    : "hidden transition-all"
}
>
<img
  src={require("../../assets/IMG_7899.jpg")}
  className="w-[125px] h-[150px] object-contain border-neutral-200 border-[1px] bg-neutral-900 rounded-md m-3"
/>
</div> */
}
