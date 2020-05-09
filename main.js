const $table = document.querySelector('table');
const $header = document.querySelector('header');
const $form = document.querySelector('form');
const $p = document.querySelector('p');

const pageHeader = new PageHeader($header)

const gradeTable = new GradeTable($table, $p);

const gradeForm = new GradeForm($form);

const app = new App(gradeTable, pageHeader, gradeForm);

app.start();
