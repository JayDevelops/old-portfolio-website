var sideNav = document.getElementById('sideNav');

var entireSite = document.getElementById('main');


function openNav() {
  sideNav.style.width = '210px';
  entireSite.style.marginLeft = '180px';
  //WILL Change the color
  document.body.style.backgroundColor = "rgb(0, 51, 102)";
}

function closeNav() {
  sideNav.style.width = '0';
  entireSite.style.marginLeft = '0';
  //WILL change the color back
  document.body.style.backgroundColor = "white";
}
