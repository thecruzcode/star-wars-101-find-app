let button     = document.querySelector('#button')
let name       = document.querySelector('#name')

//getSwInfo is the ajax request
function getSwInfo(){
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = 'https://swapi.co/api/people/' + randomNumber

//fetch api data
  axios.get(apiUrl).then(function(response) {
    updateInfo(response.data);
  })
}
//up the name when the button is selected
function updateInfo(data) {
  name.innerText        = data.name
}
//listens for button to be clicked
button.addEventListener('click', getSwInfo)