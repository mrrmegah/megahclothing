const links = document.querySelectorAll("a");
const btn = document.getElementById("playBtn");
const music = document.getElementById("music");
const stars = document.querySelectorAll(".star");
const result = document.getElementById("result");
const box = document.getElementById("ReviewMessage");


links.forEach(link=>{
    link.addEventListener("click", e =>{
        e.preventDefault();

        document.querySelector(".load").classList.add("show");

        setTimeout(()=>{
            window.location.href = link.href;
        } , 400);
    });
});

btn.addEventListener("click", ()=>{
    if(music.paused){
        music.play();
        btn.innerText = "Pause Music";
    } 
    else{
        music.pause();
        btn.innerText = "Play Music"
    }
});

function rate(num){
    stars.forEach((star, index)=>{
        if(index < num){
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
    result.innerText = num + "star rating"
}
box.addEventListener("input", ()=>{
    box.style.height = "auto";
    box.style.height = box.scrollHeight + "px";
});