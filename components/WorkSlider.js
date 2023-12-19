import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb2-5.png",
          url: "https://store.pintomarket.ir",
        },
        {
          title: "title",
          path: "/thumb1-1.jpg",
          url: "https://navatel.ir",
        },
        {
          title: "title",
          path: "/thumb3-6.png",
          url: "https://alaatv.com/",
        },

        {
          title: "title",
          path: "/thumb4-5.png",
          url: "https://github.com/Archer-Thane/pinto-runner",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5-5.gif",
        },
        {
          title: "title",
          path: "/thumb2-2.png",
          url: "https://www.npmjs.com/package/enable-shecan",
        },
        {
          title: "title",
          path: "/thumb3-3.png",
          url: "https://www.npmjs.com/package/quasar-form-builder",
        },
      ],
    },
  ],
};

const openProject = (url) => {
  window.open(url, "_blank");
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                    onClick={() => openProject(image.url)}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
