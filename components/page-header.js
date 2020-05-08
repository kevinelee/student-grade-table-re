class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    if (!newAverage) {
      this.headerElement.querySelector("span").textContent = 0;
    } else {
      this.headerElement.querySelector("span").textContent = newAverage;
    }
  }
}
