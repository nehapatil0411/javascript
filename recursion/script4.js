function fact(n)
{
    if(n>1)
    {
        return n * fact (n-1);
    }
    else
    {
        return 1;
    }
}
let ans = fact (7);
document.write(ans);