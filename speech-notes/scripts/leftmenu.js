var pageNo=1;
//----------------------------------------------------------------------------------------
function uploadFile() {

}
//----------------------------------------------------------------------------------------
function saveCache() {
    let output = document.getElementById("output").value;
    if(output!==""){
        localStorage.setItem("text",output);

        let al=document.getElementById("showAlert");

        al.className = "alert alert-info";
        al.style.display = "block";
        al.innerHTML = 'Local Storage was successful';
        setTimeout(function(){
            al.style.display = "none";
        },3000);
    }
    else {
        localStorage.clear();
    }
    let al=document.getElementById("showAlert");

    al.className = "alert alert-info";
    al.style.display = "block";
    al.innerHTML = 'Your data was saved in your local storage';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
window.onload = () => {
    let text = localStorage.getItem("text") || "";
    let output = document.getElementById("output");
    output.innerHTML = text;
}
//----------------------------------------------------------------------------------------
function newSession() {



    let al=document.getElementById("showAlert");

    al.className = "alert alert-info";
    al.style.display = "block";
    al.innerHTML = 'New page added successfully';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
//----------------------------------------------------------------------------------------
function saveFile(){
    	
    const msg = document.getElementById("output").value;
    let data = 'Fiphy: ' + msg;

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Fiphy.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();

    let al=document.getElementById("showAlert");

    al.className = "alert alert-info";
    al.style.display = "block";
    al.innerHTML = 'Your file is ready';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
//----------------------------------------------------------------------------------------
function printDiv() {
    let divContents = document.getElementById("output").value;
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Fiphy <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();

    let al=document.getElementById("showAlert");

    al.className = "alert alert-info";
    al.style.display = "block";
    al.innerHTML = 'Printing is ready';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
//----------------------------------------------------------------------------------------

function copyToClipboard(){
    let copyText = document.getElementById("output");

    copyText.select();
    copyText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyText.value);

    let al=document.getElementById("showAlert");

    al.className = "alert alert-info";
    al.style.display = "block";
    al.innerHTML = 'Copied to Clipboard';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
//----------------------------------------------------------------------------------------
function clearAll() {
    alert("Are you sure you want to clear all of your work");
    document.getElementById("output").value = "";

    let al=document.getElementById("showAlert");

    al.className = "alert alert-danger";
    al.style.display = "block";
    al.innerHTML = 'Deleted everything!';
    setTimeout(function(){
        al.style.display = "none";
    },3000);
}
//----------------------------------------------------------------------------------------