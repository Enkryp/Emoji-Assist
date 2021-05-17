var emojis= {

    ":')" : "🥲",
    "':)" : "😅",
    ":D" : "😂",
    ":[)" : "😁",
    ":(" :"🤨",
    "XD" : "😆",
    "xd" : "😆",
    "xD" : "😆",
    "Xd" : "😆",
    ":)" : "😊",
    "(:" : "🙃",
    ";)" : "😉",
    ";p" : "😜",
    ";P" : "😜",
    "xp" : "😝",
    "xP" : "😝",
    ":/" : "😕",
    "x(" : "😣",
    "-_-" : "😑",
    ":o" : "😯",
    ":O" : "😮",
    "(w)" : "🤘",
    "(w-)" : "🤟"

};

function setCursor(acton,pos) {
    var tag = acton
    var setpos = document.createRange();
    var set = window.getSelection();
    setpos.setStart(tag.childNodes[0], pos);
    setpos.collapse(true);
    set.removeAllRanges();
    set.addRange(setpos);
    tag.focus();
}

document.addEventListener('keydown', function (ks) {

    if (ks.keyCode==13 || ks.keyCode==32){
   {var act= document.activeElement;
	fire(act);}}
});




function fire(acton){

    for (var check in emojis){
    var msg= acton.innerHTML;

    if( msg.length>=check.length && msg.substr(msg.length-check.length, msg.length)==check){
        
        acton.innerHTML= msg.substr(0, msg.length-check.length)+ emojis[check];
  
        setCursor(acton,acton.innerHTML.length);
    

    }

}
}
