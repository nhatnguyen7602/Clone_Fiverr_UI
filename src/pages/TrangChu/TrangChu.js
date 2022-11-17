import React from "react";
import BannerHerro from "./BannerHerro/BannerHerro";
import CarouselService from "./CarouselService/CarouselService";
import TrangChuFooter from "./TrangChuFooter/TrangChuFooter";
import TrangChuHeader from "./TrangChuHeader/TrangChuHeader";

export default function TrangChu() {
  return (
    <div>
      {/* <TrangChuHeader /> */}

      <BannerHerro />
      <CarouselService />

      {/* <TrangChuFooter /> */}
    </div>
  );
}
