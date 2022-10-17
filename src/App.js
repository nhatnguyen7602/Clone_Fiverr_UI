import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutFiverr from "./Components/Layout/LayoutFiverr";
import TrangAdmin from "./pages/TrangAdmin/TrangAdmin";
import TrangChiTietCongViec from "./pages/TrangChiTietCongViec/TrangChiTietCongViec";
import TrangChiTietThongTinCaNhan from "./pages/TrangChiTietThongTinCaNhan/TrangChiTietThongTinCaNhan";
import TrangChu from "./pages/TrangChu/TrangChu";
import TrangDangKy from "./pages/TrangDangKy/TrangDangKy";
import TrangDangNhap from "./pages/TrangDangNhap/TrangDangNhap";
import TrangDanhSachCongViec from "./pages/TrangDanhSachCongViec/TrangDanhSachCongViec";
import TrangDanhSachCongViecVaLoaiCongViec from "./pages/TrangDanhSachCongViecVaLoaiCongViec/TrangDanhSachCongViecVaLoaiCongViec";
import TrangLoading from "./pages/TrangLoading/TrangLoading";

function App() {
  return (
    <div className="App">
      <TrangLoading />
      <BrowserRouter>
        <Routes>
          {/* Đây là phần demo thui ^^. Đừng xoá nha
          <Route element={<Layout Component={...}/>} />
           */}

          {/* TrangAdmin */}
          <Route path="/" element={<LayoutFiverr Component={TrangAdmin} />} />

          {/* TrangChiTietCongViec */}
          <Route
            path="/"
            element={<LayoutFiverr Component={TrangChiTietCongViec} />}
          />

          {/* TrangChiTietThongTinCaNhan */}
          <Route
            path="/"
            element={<LayoutFiverr Component={TrangChiTietThongTinCaNhan} />}
          />

          {/* TrangChu */}
          <Route path="/" element={<LayoutFiverr Component={TrangChu} />} />

          {/* TrangDangKy */}
          <Route path="/" element={<LayoutFiverr Component={TrangDangKy} />} />

          {/* TrangDangNhap */}
          <Route
            path="/"
            element={<LayoutFiverr Component={TrangDangNhap} />}
          />

          {/* TrangDanhSachCongViec */}
          <Route
            path="/"
            element={<LayoutFiverr Component={TrangDanhSachCongViec} />}
          />

          {/* TrangDanhSachCongViecVaLoaiCongViec */}
          <Route
            path="/"
            element={
              <LayoutFiverr Component={TrangDanhSachCongViecVaLoaiCongViec} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
