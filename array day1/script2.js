let num=[1,2,4,6,8,9,11,13,45,67,87]

for(let i=0; i<num.length; i++)
{
    if(num[i]%2==0)
    {
        document.write("0" + " ");
    }
    else
    {
        document.write("1"+ " ");
    }
}