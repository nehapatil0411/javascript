let realName="pranav";
let count = 1;
for(let i = 0;  i< realName.length; i++)
{
    count=1;
    for(let j=i+1; j<realName.length; j++ )
    {
        if(realName[i] == realName [j])
        {
            count++;
        }
    }
    document.write(realName[i]+" "+count+"<br>");
}








