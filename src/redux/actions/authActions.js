

class LoginAction {
  static LOGIN_REQUEST = "LOGIN_REQUEST";
  static LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
  static LOGIN_FAILED = "LOGIN_FAILED";

  static loginRequest() {
    return {
      type: this.LOGIN_REQUEST
    };
  }
  static loginSuccessfull(data) {
    return {
      type: this.LOGIN_SUCCESSFUL,
      data
    };
  }
  static loginFailed(error) {
    return {
      type: this.LOGIN_FAILED,
      error
    };
  }
}

export default LoginAction;