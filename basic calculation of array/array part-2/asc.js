let arr =[2,6,7,112,34,56,67,659]
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
}
document.write(arr);