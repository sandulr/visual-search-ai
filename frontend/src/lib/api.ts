import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_CBir_BACKEND || "http://localhost:8000";

export const uploadImageForSearch = async (file: File) => {
  const fd = new FormData();
  fd.append("image", file);
  // fd.append("top_k", "12");

  const resp = await axios.post(`${BACKEND_URL}/search`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 120000,
  });
  return resp.data;
};
