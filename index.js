const Google = document.querySelector("ul li a").style.color = "red"
const buttonBg = document.querySelector("button").style.backgroundColor = "yellow"

function Fontsize(){
    document.querySelector("h1").classList.toggle("HUGE")
}
 
Fontsize();

//prendo l'attributo
const getAttribute = document.querySelector("a").getAttribute("href")
console.log(getAttribute);

//setto attributo 
const setAttribute = document.querySelector("a").setAttribute("href", "https://www.bing.com")
