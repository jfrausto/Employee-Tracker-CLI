class Role {
  // ! will have to deal with reassigning d_id, because it is made
  // ! once you create the department first
  constructor(title, salary, d_id) {
    this.title = title;
    this.salary = salary;
    this.d_id = d_id;
  }
  getTitle() {
    return this.title;
  }
  getSalary() {
    return this.salary;
  }
  getDepartmentID() {
    return this.d_id;
  }
}

module.exports = Role;
