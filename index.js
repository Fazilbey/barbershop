const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();


function toggleMoreInfo() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";
    }
  }