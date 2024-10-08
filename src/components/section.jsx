import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Button from "./common/button";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../app/fonts/Butler/Butler-Bold.woff2",
});

const Section = ({
  top_title,
  top_paragraph,
  bannerImg,
  banner_caption,
  text,
  text2,
  text3,
  gray_title,
  gray_paragraph,
  gray_title2,
  gray_paragraph2,
  paragraph_1st,
  paragraph_2nd,
  details,
  img1,
  img2,
  img3,
  img4,
  img5,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="mt-10">
        <h1 className={`${myFont.className} text-4xl mb-3`}>{top_title}</h1>
        <p className={`text-2xl text-blue-800 underline ${myFont.className}`}>
          {top_paragraph}
        </p>

        <div className="py-6">
          <Image
            src={bannerImg}
            alt="Cotopaxi Allpa 35L Travel Pack"
            width={600}
            height={600}
          />
        </div>
        <div className="text-center mb-2">
          <p className="text-gray-500">{banner_caption}</p>
        </div>
        <div className="max-w-[300px] flex flex-col mx-auto gap-2">
          <Button text={text} text2={text2} text3={text3} />
        </div>
      </div>
      <div className="bg-[#F5F2EA] p-5 my-5">
        <div className="mt-2 text-[16px]">
          <div className="pb-3">
            <span className="font-bold text-lg"> {gray_title}</span>
            {gray_paragraph} <br />
          </div>
          <span className="font-bold text-lg">{gray_title2}</span>
          {gray_paragraph2}
        </div>
      </div>

      <div>
        <p className="text-lg">
          {paragraph_1st}
          <br />
          <br />
          {paragraph_2nd} <br />
          <br />
          <span className="font-bold">The Details</span> {details}
        </p>
      </div>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              {" "}
              <Image
                src={img1}
                alt="Cotopaxi Allpa 35L Travel Pack"
                width={650}
                height={600}
              />
              <p className="text-gray-500 uppercase text-center  my-2">
                PHOTO: Travel + Leisure / Jhett Thompson
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img2}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={650}
              height={600}
            />
            <p className="text-gray-500 uppercase text-center  my-2">
              PHOTO: Travel + Leisure / Jhett Thompson
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img3}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={650}
              height={600}
            />
            <p className="text-gray-500 uppercase text-center  my-2">
              PHOTO: Travel + Leisure / Jhett Thompson
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img4}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={650}
              height={600}
            />
            <p className="text-gray-500 uppercase text-center  my-2">
              PHOTO: Travel + Leisure / Jhett Thompson
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img5}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={600}
              height={600}
            />{" "}
            <p className="text-gray-500 uppercase text-center  my-2">
              PHOTO: Travel + Leisure / Jhett Thompson
            </p>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={img1}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img2}
              alt="Cotopaxi Allpa 35L Travel Pack"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3} alt="" width={100} height={100} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img4} alt="" width={100} height={100} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img5} alt="" width={100} height={100} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
