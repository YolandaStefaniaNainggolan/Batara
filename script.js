/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
//Object for example
const about = {
  species:'',
  height:'',
  weight:'',
  abilities:''
};

const breeding = {
  gender :'',
  egg_group:'',
  egg_cycle:''

}
