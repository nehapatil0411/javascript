function add(n)
{
    let sum=0;
    for(let i=1; i<=n; i++)
    {
        sum+=i;
    }
    return sum;
}
let ans = add(5);
document.write(ans);
