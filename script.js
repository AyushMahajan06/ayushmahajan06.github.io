const aboutButton = document.querySelector('#About_Button');

function openTab(evt, TabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(TabName).style.display = "flex";


  const tabs = {
    "About": ["white", "blueviolet", "white"],
    "Project": ["aquamarine", "white", "white"],
    "Achieve": ["white", "white", "greenyellow"],
  };

  const [color1, color2, color3] = tabs[TabName] || [];
  const projectButton = document.getElementById("Project_button");
  const aboutButton2 = document.getElementById("About_Button");
  const achievementButton = document.getElementById("Achievement_button");

  if (color1 !== undefined) {
    projectButton.style.color = color1;
    aboutButton2.style.color = color2;
    achievementButton.style.color = color3;
  }

  /* if (document.getElementById(TabName).style.display === "flex") {
    if (TabName === "About") {
      document.getElementById("Project_button").style.color = "white";
      document.getElementById("About_Button").style.color = "blueviolet";
      document.getElementById("Achievement_button").style.color = "white";
    } else if (TabName === "Project") {
      document.getElementById("Project_button").style.color = "aquamarine";
      document.getElementById("Achievement_button").style.color = "white";
      document.getElementById("About_Button").style.color = "white";
    } else if (TabName === "Achieve") {
      document.getElementById("Achievement_button").style.color = "greenyellow";
      document.getElementById("About_Button").style.color = "white";
      document.getElementById("Project_button").style.color = "white";
    }
  } */
}

function defaultTab() {
  document.getElementById("About_Button").click();
}
