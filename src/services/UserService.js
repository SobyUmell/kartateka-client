import $api from "../http";
export default class AuthService {
  static fetchUser() {
    return $api.get("/auth/users");
  }
}
