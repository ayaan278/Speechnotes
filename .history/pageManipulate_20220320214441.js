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

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("about").style.display="inline-block";
  }
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    document.getElementById("help").style.display="inline-block";
  }
  if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
    document.getElementById("info").style.display="table";
  }
  if(document.body.scrollTop > 950 || document.documentElement.scrollTop > 950){
    document.getElementById("tips").style.display="inline-block";
  }
  if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
    document.getElementById("foot").style.display="inline-block";
  }
}
//----------------------------------------------------------------------------------------
function changePage(){
  let x= document.getElementById("editor1");
  let y= document.getElementById("editor2");
  let p= document.getElementById("output");
  let q= document.getElementById("temp1");
  if(x.style.display === "block" && y.style.display === "none" ) {
    x.style.display = "none";
    y.style.display = "block";
    p.id="temp1";
    q.id="output";
  }
  else {
    x.style.display = "block";
    y.style.display = "none";
    q.id="temp1";
    p.id="output";
  }
}
//----------------------------------------------------------------------------------------