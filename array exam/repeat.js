//Remove repeated elements from an array and sort in ascending order.



let arr=[1,7,3,2,4,5,2];

arr.pop((arr)=>{
    arr[i];
});
for(let i =0; i<=arr.length; i++)
{
    for(let j=i+1; j<=arr.length; j++)
    {
        
        if(arr[i] > arr[j])
            {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
    }
}
console.log("The ascending order of the  array is :  " + arr);