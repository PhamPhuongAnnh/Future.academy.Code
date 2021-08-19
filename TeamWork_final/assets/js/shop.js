const drowpDown = document.querySelector('.block-tag .drowpdown');
const blockTag = document.querySelector('.block-tag')
console.log(blockTag)
drowpDown.onclick = function(){
    if(blockTag.clientHeight == 108){
        blockTag.style.height = "54px";
    }
    else{
        blockTag.style.height = "108px";
    }
}