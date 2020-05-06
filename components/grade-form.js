class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onsSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const name = formData.get("name");
    const course = formData.get("course");
    const grade = formData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
