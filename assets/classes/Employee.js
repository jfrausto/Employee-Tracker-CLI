class Employee {
  // ! will have to deal with updating the r and m id's
  // ! those IDs come from MySQL once they are inserted into tables
  // ! could query the database to get those values to create these objects
  constructor(firstName, lastName, r_id, m_id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.r_id = r_id;
    this.m_id = m_id;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.firstName;
  }
  getRoleID() {
    return this.r_id;
  }
  getManagerID() {
    return this.m_id;
  }
}

module.exports = Employee;
