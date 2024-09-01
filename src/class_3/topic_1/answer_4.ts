type Employee = {
  name: string;
  salary: number;
};

const employeesList: Employee[] = [
  { name: "Alice", salary: 95000 },
  { name: "Bob", salary: 120000 },
  { name: "Charlie", salary: 105000 },
  { name: "David", salary: 99000 }
];

function hasHighEarningEmployee(employees: Employee[]): boolean {
  return employees.some(employee => employee.salary > 100000); //some Method: It checks each employee in the array to see if their salary is greater than $100,000.
}

const highEarningExists = hasHighEarningEmployee(employeesList);
console.log(highEarningExists); // This will print true because Bob and Charlie have salaries greater than 100,000
