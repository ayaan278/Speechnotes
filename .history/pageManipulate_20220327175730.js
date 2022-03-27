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

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("about").style.display="inline-block";
  }
  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    document.getElementById("info").style.display="table";
  }
  if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
    document.getElementById("foot").style.display="inline-block";
  }
}
//----------------------------------------------------------------------------------------
