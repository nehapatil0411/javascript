const apiKey = "1a44b63b";
// const api = "https://www.omdbapi.com/?t=rrr&apikey=1a44b63b";
const img = document.getElementById("img");
const Title = document.getElementById("name");
const button = document.getElementById("button");
const input = document.getElementById("input");
const actor = document.getElementById("actor");
const writer = document.getElementById("writer");
const director = document.getElementById("director");
const released = document.getElementById("released");
const awards = document.getElementById("awards");
const des = document.getElementById("des");

function callAPi(t){
    const api = "https://www.omdbapi.com/?t=" + t + "&apikey=1a44b63b";
    fetch(api).then((response)=>response.json()).then((data)=>{
        img.src=data.Poster;
        Title.innerHTML = data.Title;
        actor.innerHTML = data.Actors;
        writer.innerHTML = data.Writer;
        des.innerHTML = data.Plot;
        released.innerHTML = data.Released
        awards.innerHTML = data.Awards
    });
}

button.addEventListener("click",function()
{
    const t = input.value;
    callAPi(t);
});