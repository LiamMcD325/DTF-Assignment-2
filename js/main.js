
let navigation = " <ul id='navUL'><li id='left'><a id='navLink' href='index.html'>Home</a></li><li id='left'><a id='navLink' href='programs.html'>Programs</a></li><li id='left'><a id='navLink' href='news.html'>News</a></li><li id='left'><a id='navLink' href='settings.html'>Settings</a></li></ul>";

let header = "<img src='images/logo_indi-Reverse.png' alt='logo, white text'>";

let footer = 'Contacts:<br>'         
            + '905-575-2175   <br>'
            + 'INDI1015FM@gmail.com<br>'
            + 'F111 - 135 Fennell Ave West<br>'
            + 'Hamilton, ON L9C 0E5<br>';

let main = "<hr>" + document.getElementById("main").innerHTML;

document.getElementById("nav").innerHTML = navigation;

document.getElementById("header").innerHTML = header;


document.getElementById("footer").innerHTML = footer;

document.getElementById("main").innerHTML = main;