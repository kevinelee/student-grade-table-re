class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    console.log(newAverage);
    this.headerElement.querySelector('span').textContent = newAverage;

  }
}
