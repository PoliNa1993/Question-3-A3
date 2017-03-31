var dom;

function getElementAmpersand() {
    document.getElementById("field").addEventListener("blur", convertAmpersands, false);

}

function convertAmpersands() {

    dom = document.getElementById("field").value;
    document.getElementById('result').value = dom.replace("&", " and ");


}

window.addEventListener("load", getElementAmpersand, false);
