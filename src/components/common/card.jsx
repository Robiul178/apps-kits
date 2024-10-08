import Image from "next/image";
import "./card.css";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../../app/fonts/Butler/Butler-Medium.woff2",
});

const Card = ({ heading, name, img }) => {
  return (
    <div className="max-w-[350px] font-sans border  ">
      <Image src={img} alt="jhs" width={350} height={200} />
      <div className="p-2">
        <p className={`font-semibold text-sm `}>BACKPACK TOTTES + SMALL BAG</p>
        <h1 className={`text-2xl  py-4 hover:underline ${myFont.className}`}>
          {heading}
        </h1>
        <p className="text-gray-500 font-xs">By {name}</p>
      </div>
    </div>
  );
};

export default Card;
