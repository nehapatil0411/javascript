//Check if the given string is a palindrom or not.


let Name=  prompt("Enter any name : ")
let temp_name = "" ;

for(let i=Name.length-1; i>=0; i--)
{
    temp_name += nam[i]
}

if(temp_name==nam)
{
    console.log(Name + " is a palindron name !");

}
else
{
    console.log(Name + " is not a palindron name !"); 
}

