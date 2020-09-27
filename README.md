# Employee Tracker CLI

[![License: MIT](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

This application is a employee management system that uses a **C**ommand **L**ine **I**nterface (CLI). View, add, and update employee information directly on the command line.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Testing)
- [Questions](#Questions)
- [Links](#Links)

## Installation

Download MySQL workbench and run `schema.sql` to create an `employee_db` database. Then, run the script `seeds.sql` to populate the database with sample data. From here you can overwrite the file to initially populate the database. You can forego creating seeds there and use the actual CLI to enter information. Make sure to create the department, role, and employee table in that order.

## Usage

use the command `npm run start` to start the CLI. From there you can use the arrow keys to navigate the prompts from Inquirer to execute commands as you wish.

![Sample promts view](/screenshots/EMS_CLI.PNG?raw=true "Some employees")

## License

This project is covered under the **MIT** license -- see more info [here](https://opensource.org/licenses/MIT).

## Contributing

Create a new branch and do a pull request, pending review.

## Questions

- GitHub: [jfrausto](https://github.com/jfrausto)
- If you have any further questions, you can reach me at _jesse.fraust@gmail.com_

## Links

- [video demo](https://drive.google.com/file/d/1D7Clw7pRry0ypBBXvzFRrc6pPTllNAy4/view)
