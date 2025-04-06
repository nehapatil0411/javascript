// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

class  Indian {
    
    constructor(adhaarNo,birthplace)
{
    this.adhaarNo = adhaarNo;
    this.birthplace = birthplace;
}

Indian()
{
    document.writeln("Aadhar no : "+ this.adhaarNo + "<br>");
      document.writeln("Birthplace : "+ this.birthplace + "<br>");
}

}
class Person  extends Indian{

    constructor(adhaarNo,birthplace,name,age,gender)
    {
        super(adhaarNo,birthplace)

        this.name = name;
        this.age = age;
        this. gender = gender;
    }

    Person()
    {
        super.Indian();
        document.writeln("Name :" + this.name + "<br>");
        document.writeln("Age :" + this.age + "<br>");
        document.writeln("Gender :" + this.gender + "<br>");
    }
}

class Employee extends Person{
    constructor(adhaarNo, birthplace, name, age, gender, id, salary, role)
    {
        super(adhaarNo,birthplace,name,age,gender)
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    Employee()
    {
        super.Person();
        document.writeln("Id No : " +this.id + "<br>");
        document.writeln("Salary : " +this.salary + "<br>");
        document.writeln("Role : " +this.role + "<br>");
    }
}

const child1 = new Indian("<br>" + 978523524874, "Shirpur" , "Neha" , 19 , Female , 29 , 70000, "FullStack Developer");
child1.Indian();
const child2 = new Person("<br>" + 2657415785157, "Dhule" , "Raj" , 21 , Male , 30 , 78000, "Software Developer");
child2.Person();
const child3 = new Employee("<br>" +378415812315 ,"Nandurbar" , "Prachi" , 20 , Female , 30 , 40000, "Frontend Developer");
child3.Employee();