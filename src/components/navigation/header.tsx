import Link from "next/link";
import WalletConnectButton from "../button/ConnectWalletButton";

const MenuItems = [
  {
    value: "Home",
    link: "",
  },
  {
    value: "Tickets",
    link: "tickets",
  },
  {
    value: "Create Box",
    link: "create-box",
  },
  {
    value: "Faq",
    link: "Faq",
  },
];

const LandingHeader = () => {
  return (
    <div className="fixed top-0 w-full py-4 flex justify-center font-semibold bg-black text-white">
      <div className="flex justify-between w-full container">
        <Link className="p-6 ml-20 hidden md:block text-xl" href={"/"}>
          Logo
        </Link>
        <div className="p-4 mr-20 hidden md:block">
          <div className="flex gap-8 items-center">
            {/* {MenuItems.map((item, index) => (
              <Link key={index} className="" href={item.link}>
                {item.value}
              </Link>
            ))} */}
          <WalletConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
