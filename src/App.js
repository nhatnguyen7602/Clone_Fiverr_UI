import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "./assets/styleAdmin.css";
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
import TrangQuanLyUser from "./pages/TrangAdmin/TrangQuanLyUser/TrangQuanLyUser";
import TrangQuanLyCongViec from "./pages/TrangAdmin/TrangQuanLyCongViec/TrangQuanLyCongViec";

function App() {
  return (
    <div className="App">
      <TrangLoading />
      <BrowserRouter>
        <Routes>
          {/* TrangAdmin */}
          {/* <Route path="/" element={<LayoutFiverr Component={TrangAdmin} />} /> */}
          <Route
            path="/admin"
            element={<TrangAdmin Component={TrangQuanLyUser} />}
          />

          <Route
            path="/admin/job"
            element={<TrangAdmin Component={TrangQuanLyCongViec} />}
          />

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
