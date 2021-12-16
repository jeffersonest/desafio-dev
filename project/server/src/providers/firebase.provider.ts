import axios from "axios";

class FirebaseProvider {
  public async checkTokenId(tokenId: string): Promise<Boolean> {
    try {
      const userData = await axios.post(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`
      );

      console.log(userData.data);

      if (userData.data.email_verified === "true") return true;

      return false;
    } catch (error) {
      return false;
    }
  }
}

export default new FirebaseProvider();
