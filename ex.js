var emojis= {

    ":')" : "๐ฅฒ",
    "':)" : "๐",
    ":D" : "๐",
    ":[)" : "๐",
    ":(" :"๐คจ",
    "XD" : "๐",
    "xd" : "๐",
    "xD" : "๐",
    "Xd" : "๐",
    ":)" : "๐", // ๐
    "(:" : "๐",
    ";)" : "๐",
    ";p" : "๐",
    ";P" : "๐",
    "xp" : "๐",
    "xP" : "๐",
    ":/" : "๐",
    "x(" : "๐ฃ",
    "-_-" : "๐",
    ":o" : "๐ฏ",
    ":O" : "๐ฎ",
    "(w)" : "๐ค",
    "(w-)" : "๐ค"

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
