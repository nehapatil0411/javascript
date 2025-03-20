const title= document.getElementById("title");

btn1.addEventListener("click" , () => {

    let first_num = parseInt(one.value)
    let second_num = parseInt(two.value)
    let sum = first_num + second_num; 

    title.innerHTML = " Sum of " + first_num + " & " +  second_num + " is  " +  sum ;

})