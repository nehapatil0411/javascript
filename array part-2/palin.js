
let nam =  prompt("Enter any name : ")
let temp_name = "" ;

for(let i=nam.length-1; i>=0; i--)
{
    temp_name += nam[i]
}

if(temp_name==nam)
{
    document.write(nam + " is a palindron name !");

}
else
{
    document.write(nam + " is not a palindron name !"); 
}

 