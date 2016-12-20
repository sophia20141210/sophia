/**
 * Created by Administrator on 2016/12/19 0019.
 */
window.onload=function(){
    var div2=document.getElementById("div2");
    var div1=document.getElementById("div1");
    div2.onclick=function(){
        div1.className=(div1.className=="close1")?"link-off":"close1";
        div2.className=(div2.className=="close2")?"link-on":"close2";
    }
};
