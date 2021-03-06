class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    // passing in instantiated GradeTable as this.gradeTable
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }

  createGrade(name, course, grade){
      $.ajax({
        method: "POST",
        headers: { "x-access-token": "JPYalZSD" },
        data: {name, course, grade},
        url: "https://sgt.lfzprototypes.com/api/grades",
        success: () => this.getGrades(),
        error: (err) => this.handleGetGradesError(err),
      });

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
    this.pageHeader.updateAverage(Number.parseFloat(totalGrade/gradesArray.length).toFixed(2)); //calculating average
  }

  deleteGrade(id){
    console.log(id);
        $.ajax({
          method: "DELETE",
          headers: { "x-access-token": "JPYalZSD" },
          data: id,
          url: "https://sgt.lfzprototypes.com/api/grades/" + id,
          success: () => this.handleDeleteGradeSuccess(),
          error: () => this.handleDeleteGradeError(),
        });
  }

  handleDeleteGradeError(err){
    console.error(err)
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }


  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
