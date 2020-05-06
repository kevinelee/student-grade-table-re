class App {
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  static test() {
    console.log("test");
  }

  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com",
      success: (data) => this.handleGetGradesSuccess(data),
      error: (err) => this.handleGetGradesError(err),
    });
  }

  handleGetGradesError(err) {
    console.error(err);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  start() {
    this.getGrades();
  }
}
