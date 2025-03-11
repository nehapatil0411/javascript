// wap to find maximum number from the given array

let numbers = [2, 7, 11, 8, 5];
let min = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

document.write("The minimum number from the given array is : ",min);





