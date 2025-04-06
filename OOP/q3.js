// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class Students{
            #name;
            #roll_no;
            #age;
            #std;
            #percentage;

constructor (name ,roll_no , age, std, percentage)
{
    this.#name = name;
    this.#roll_no = roll_no;
    this.#age = age;
    this.#std = std;
    this.#percentage = percentage;
}
print()
{
    document.writeln("name : " + this. #name+"<br>");
    document.writeln("Roll_no : " + this. #roll_no+"<br>");
    document.writeln("Age : " + this. #age+"<br>");
    document.writeln("Std : " + this. #std+"<br>");
    document.writeln("Percentage : " + this. #percentage+"<br>");
}

}

const s1 = new Students ("Neha", 1 , 19, 12+"th" , 87.50);
const s2= new Students ("Roshni", 2 , 18, 11+"th" , 89.70);
const s3= new Students ("Manasi", 3 , 20, 10+"th" , 85.30);

document.writeln("Students 1 "+" <br>");
s1.print();
document.writeln("Students 1 "+" <br>");
s2.print();
document.writeln("Students 1 "+" <br>");
s3.print(); 