class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement; //<table>
  }

  createDataElement(grade) {

    const tr = document.createElement("tr");
    for (const property in grade) {
      if (property !== "id" && property !== "createdBy") {
        const td = document.createElement("td");
        td.textContent = grade[property];
        tr.append(td);
      }
    }
    return tr;
  }

  updateGrades (grades) {
    const $tbody = this.tableElement.querySelector("tbody");
    while ($tbody.firstChild) {
      $tbody.removeChild($tbody.lastChild);
    }
    for (let i = 0; i < grades.length; i++) {
      // console.log(grades[i]);
      let tr = this.createDataElement(grades[i]);
      $tbody.append(tr);
    }
  }
}
