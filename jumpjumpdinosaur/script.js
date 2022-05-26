var charactor = 
document.getElementById("charactor");
var block = document.getElementById("block");

function jump() {
    if (charactor.classList != "animation"){
        charactor.classList.add("animation")
    }
    setTimeout(function(){
        charactor.classList.remove("animation")
    },500);
}
var chechdead = setInterval(function() {
    var charactorTop = 
    parseInt(window.getComputedStyle(charactor).
    getPropertyValue("top"));
    var blockleft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 &&
        charactorTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("You Lose");
        }
},10) ;