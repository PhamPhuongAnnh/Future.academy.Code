const drowpDown = document.querySelector('.block-tag .drowpdown');
const blockTag = document.querySelector('.block-tag')
console.log(blockTag)
drowpDown.onclick = function(){
    if(blockTag.classList.contains("minHeight")){
        blockTag.style.height = "54px";
        blockTag.classList.remove("minHeight");
    }
    else{
        blockTag.style.height = "104px";
        blockTag.classList.add("minHeight");
    }
}