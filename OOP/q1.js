// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.


class Employee{

    emp(name,id,salary,role)
    {
        document.writeln(name);
        document.writeln(id);
        document.writeln(salary);
        document.writeln(role);
    }
}

const e1 = new Employee();
const e2 = new Employee();
const e3 = new Employee();

document.writeln("Employee 1 : ")
e1.emp("Neha" , 2904, 75000, " Full stack developer" + "<br>");


document.writeln("Employee 2 :")
e2.emp("Prachi" , 2905, 90000, "Software developer" + "<br>");


document.writeln("Employee 3 : ")
e3.emp("Yashika" , 2906, 50000, "Frontend  developer" + "<br>");

