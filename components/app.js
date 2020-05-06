class App {
  constructor(gradeTable) {
    // passing in instantiated GradeTable as this.gradetable
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  getGrades() {
    $.ajax({
      method: "GET",
      headers: { "x-access-token": "JPYalZSD" },
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: (data) => this.handleGetGradesSuccess(data),
      error: (err) => this.handleGetGradesError(err),
    });
  }

  handleGetGradesError(err) {
    console.error(err);
  }

  handleGetGradesSuccess(gradesArray) {
    this.gradeTable.updateGrades(gradesArray);
  }

  start() {
    this.getGrades();
  }
}
