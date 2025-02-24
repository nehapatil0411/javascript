function prime(n)
{
     if(n % 2 == 1)
     {
        document.write("This is a Prime number.");
     }
     else if(n ==2)
     {
        document.write("This is a Prime number.");
     }
     else
     {
        document.write("This is not a Prime number.");
     }
}
    let x = prompt("Enter a number : ");
    let n = parseInt(x);
    
    prime(n);
    