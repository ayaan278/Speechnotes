//----------------------------------------------------------------------------------------
window.onscroll = function() {animate()};
function animate() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "23px";
    document.getElementById("logo").style.textAlign = "left";
  }
  else {
    document.getElementById("navbar").style.padding = "72px 10px";
    document.getElementById("logo").style.fontSize = "50px";
    document.getElementById("logo").style.textAlign = "center";
  }
}
//----------------------------------------------------------------------------------------
