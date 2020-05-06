const $table = document.querySelector('table');

const gradeTable = new GradeTable($table);

const app = new App(gradeTable);

app.start();
