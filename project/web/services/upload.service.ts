import { Api } from "../config/api";

class UploadService {
  public async sendFile(file: File, idToken: string): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    const fileUpload = await Api.post("/transactions/upload", formData, {
      headers: {
        Authorization: "Bearer " + idToken,
        "Content-Type": "multipart/form-data",
      },
    });
    return {};
  }
}

export default new UploadService();
