const $table = document.querySelector('table');
const $header = document.querySelector('header');

const pageHeader = new PageHeader($header)

const gradeTable = new GradeTable($table);

const app = new App(gradeTable, pageHeader);

app.start();
