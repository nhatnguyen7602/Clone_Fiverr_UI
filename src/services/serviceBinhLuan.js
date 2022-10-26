import { https } from "./configURL";

export const serviceBinhLuan = {
  layBinhLuanTheoCongViec: (maCongViec) => {
    let uri = `/api/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`;
    return https.get(uri);
  },
};
