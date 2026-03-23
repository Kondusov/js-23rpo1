let flag;
let linkColor = document.getElementById('themeColor');
function clickButton() {
    if(flag != 1 && flag != undefined){
        linkColor.setAttribute('href','style/style-2.css');
        flag = 1;
    }
    else{
        linkColor.setAttribute('href' ,'style/style-1.css');
        flag = 0;
    }
  }