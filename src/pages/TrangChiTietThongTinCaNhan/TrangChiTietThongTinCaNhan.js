import React from "react";
import ThongTinCaNhan from "./ThongTinCaNhan/ThongTinCaNhan";
import CongViecDaThue from ".//CongViecDaThue/CongViecDaThue";

export default function TrangChiTietThongTinCaNhan() {
  return (
    <div className="py-4">
      <div className="container mx-auto flex justify-between">
        <div className="mr-4">
          <ThongTinCaNhan />
        </div>

        <div>
          <CongViecDaThue />
        </div>
      </div>
    </div>
  );
}
