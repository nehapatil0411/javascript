function factorial(n)
{
    for(i=1; i<=n; i++)
    {
        fact = fact * i;
    }
    document.write("Factorial of the entered number is:",(fact));
}
let x= prompt("Enter a number : ");
let n = parseInt(x);
let fact = 1;
factorial(n);