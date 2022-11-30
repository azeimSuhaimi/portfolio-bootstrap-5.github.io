/*
const li = document.querySelectorAll(".mynav");
const sec = document.querySelectorAll("section");

function activePages()
{
    console.log(window.scrollY);
    let len = sec.length;

    while(--len && window.scrollY + 1000 < sec[len].offsetTop)
    {

    }

    li.forEach(Itx => Itx.classList.remove("active"));
    li[len].classList.add("active");
}
activePages();
window.addEventListener('scroll',activePages);
*/
function changeText(id) 
{
    const li = document.querySelectorAll(".mynav");
    li.forEach(Itx => Itx.classList.remove("active"));
    const activePages = window.location.href;
    id.classList.add("active");
    console.log(activePages);
}

