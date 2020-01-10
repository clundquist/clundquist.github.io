function setFooter() {
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();
    document.getElementById("lastmodified").innerHTML = "Last Updated: " + document.lastModified;
}