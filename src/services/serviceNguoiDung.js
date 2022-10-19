import { https } from "./configURL";

export const userServ = {
  layDsNguoiDung: () => {
    let uri = `/api/users`;

    return https.get(uri);
  },
};
