import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full h-16 absolute z-10 mx-8 mt-4 flex items-center">
      <Image
        src="/logo.png"
        width={60}
        height={31}
        // className="h-full w-full object-cover"
        alt="od logo"
      />
    </div>
  );
};

export default Nav;
