import React from "react";

export default function CategoriesItem(props) {
  let { dsNhomChiTietLoai } = props;

  return (
    <div className="flex p-5 text-base rounded bg-white shadow-md border-t-2">
      {dsNhomChiTietLoai.map((nhomChiTietLoai, index) => {
        let { dsChiTietLoai } = nhomChiTietLoai;
        console.log("dsChiTietLoai: ", dsChiTietLoai);
        return (
          <div className="mr-32">
            <p className="font-bold">{nhomChiTietLoai.tenNhom}</p>
            <ul>
              {dsChiTietLoai.map((item) => {
                return (
                  <li className="mt-1">
                    <a className="text-gray-500 font-semibold hover:text-[#48d048]">
                      {item.tenChiTiet}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
