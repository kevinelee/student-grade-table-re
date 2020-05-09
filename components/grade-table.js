class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement; //<table>
    this.noGradesElement = noGradesElement;
    this.renderGradeRow = this.renderGradeRow.bind(this);
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

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  //data is a single grade object.  deleteGrade is a function
  renderGradeRow(data, deleteGrade) {
    const $tbody = this.tableElement.querySelector("tbody");
    const td = document.createElement("td");
    const button = document.createElement("button");
    let tr = this.createDataElement(data);

    button.className = "btn btn-danger";
    button.textContent = "DELETE";
    button.addEventListener("click", () => deleteGrade(data.id));
    td.append(button);
    tr.append(td);

    $tbody.append(tr);
    return tr;
  }

  updateGrades(grades) {
    const $tbody = this.tableElement.querySelector("tbody");
    while ($tbody.firstChild) {
      $tbody.removeChild($tbody.lastChild);
    }

    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }

    console.log("number of grades: ", grades.length);

    if(grades.length  === 0){
      this.noGradesElement.className = "";
    } else {
      this.noGradesElement.className = "d-none";
    }
  }
}

// for (let i = 0; i < grades.length; i++) {
//   console.log(grades[i]);
//   let tr = this.createDataElement(grades[i]);
//   $tbody.append(tr);
// }
