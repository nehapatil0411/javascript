function armstrong(n){
let num = n;
let result = 0;
let count = 0;

while(num > 0)
{
    num = Math.floor(num / 10 );
    count ++;
}
num = n;

for(i=1; i<=count; i++)
{
    let last = num % 10;
    let multi = 1;
    for(let j=1; j<=count; j++)
    {
      multi = multi * last;
    }
    result = result + multi;
    num = Math.floor (num / 10);
   
}
    if(n == result)
    {
        document.write("This is an Armstrong number.");
    }
    else
    {
        document.write("This is not an Armstrong number");
    }


}
armstrong(371);