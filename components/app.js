class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    // passing in instantiated GradeTable as this.gradetable
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  createGrade(name, course, grade){
    console.log(name, course, grade);
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
    let totalGrade = 0;
    for(let i=0;i<gradesArray.length;i++){
      totalGrade += gradesArray[i].grade;
    }
    this.pageHeader.updateAverage(totalGrade/gradesArray.length);
  }

  start() {
    this.getGrades();
  }
}

// addEventListener("click",()=>console.log(event.target));
