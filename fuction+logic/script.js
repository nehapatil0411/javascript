
function addition(x,y)
{
    document.write("Addition of  x and y is  : " + (x + y) + "<br><hr>");
}

function substraction(x,y)
{
    document.write("Substraction of  x and y is  : " + (x -  y) + "<br><br>");
}

function divide(x,y)
{
    document.write("Division of x and y is  : " + (x / y) + "<br><br>");
}

function multiply(x,y)
{
    document.write("Multiply of  x and y is  : " + (x * y) + "<br><br>");
}

function Module(x,y)
{
    document.write("Module of  x and y is  : " + (x %  y) + "<br><br>");
}

{
    let x = prompt("Enter first Number :- ")
    let y = prompt("Enter second Number :- ")
    x=parseInt(x);
    y=parseInt(y);

    let choice = prompt("Enter your choice   (- , * , / , + , % ) :- ");

    switch(choice)
    {
        case "+" : 
        document.write = addition(x, y)
        break;

        case "-" : 
        document.write = substraction(x, y)
        break;

        case "*" : 
        document.write = multiply(x, y)
        break;

        case "/" : 
        document.write = divide(x, y)
        break;

        case "%" : 
        document.write = mode(x, y)
        break;

        default : document.write("Enter valid sign !")
        break;
    }
    
}

