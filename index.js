// JavaScript code
function search_animal() {
	let input = document.getElementById('searchBar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('kurac');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
//Create a search bar and add it to ./index.html
/*const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = characters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.occupation.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

/*var searchBar = Ti.UI.createSearchBar({
    barColor:'#000',
    showCancel:true,
    height:43,
    top:0,
});
*/
 
/*
Testversuch von popups für schwierige Begriffe 
*/
/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

/*
fix Navbar
*/
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
/*window.onscroll = function() {myFunction()};

          var navbar = document.getElementById("navbar");
          var sticky = navbar.offsetTop;

          function myFunction() {
            if (window.pageYOffset >= sticky) {
              navbar.classList.add("sticky")
            } else {
              navbar.classList.remove("sticky");
            }
          }
*/