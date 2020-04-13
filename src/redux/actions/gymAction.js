class GymAction {
  static GYM_LIST_REQUEST = "GYM_LIST_REQUEST";
  static GYM_LIST_SUCCESSFUL = "GYM_LIST_SUCCESSFUL";
  static GYM_LIST_FAILED = "GYM_LIST_FAILED";

  static GYM_VIDEO_UPLOAD_REQUEST = "GYM_VIDEO_UPLOAD_REQUEST";
  static GYM_VIDEO_UPLOAD_SUCCESSFUL = "GYM_VIDEO_UPLOAD_SUCCESSFUL";
  static GYM_VIDEO_UPLOAD_FAILED = "GYM_VIDEO_UPLOAD_FAILED";

  static gymlistRequest() {
    return {
      type: this.GYM_LIST_REQUEST
    };
  }
  static gymlistSuccessfull(data) {
    return {
      type: this.GYM_LIST_SUCCESSFUL,
      data
    };
  }
  static gymlistFailed(error) {
    return {
      type: this.GYM_LIST_FAILED,
      error
    };
  }
  // upload video
  static uploadVideoRequest() {
    return {
      type: this.GYM_VIDEO_UPLOAD_REQUEST
    };
  }
  static uploadVideoSuccessfull(data) {
    return {
      type: this.GYM_VIDEO_UPLOAD_SUCCESSFUL,
    };
  }
  static uploadVideoFailed(error) {
    return {
      type: this.GYM_VIDEO_UPLOAD_FAILED,
      error
    };
  }
}

export default GymAction;