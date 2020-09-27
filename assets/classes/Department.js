// * this class defines and constructs the departments to be made
// * upon invoking new Department()

class Department {
  constructor(d_name) {
    this.d_name = d_name;

    return this;
  }
  getName() {
    return this.name;
  }
}

module.exports = Department;
