// wap to find maximum number from the given array

let numbers = [3, 7, 11, 8, 5];
let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

document.write("The maximum number from the given array is : ",max);


