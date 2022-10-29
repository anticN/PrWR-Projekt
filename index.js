//Create a search bar and add it to ./index.html
const searchBar = document.getElementById('searchBar');
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