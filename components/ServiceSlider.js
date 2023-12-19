import { Swiper, SwiperSlide } from "swiper/react";
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { MdManageAccounts } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <MdManageAccounts />,
    title: "Manage Teams",
    description: "Leading diverse teams for project success.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Crafting advanced digital solutions.",
  },
  {
    icon: <FaPhone />,
    title: "Consulting",
    description: "Strategic advice with psychological insights.",
  },
  {
    icon: <RxRocket />,
    title: "Agile Management",
    description: "Agile methods for adaptable projects.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Creating visually appealing designs.",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
