let submitButton = document.querySelector('.submit-btn')
let userInput = document.querySelector('#user-input')
let minionTranslate = document.querySelector('#chef-translate')

let url = 'https://api.funtranslations.com/translate/chef.json?text='

function genrateUrl(text) {
  return url + text
}

function handelError(error) {
  alert('please try again' + error)
}

submitButton.addEventListener('click', () => {
  let textForTranslation = userInput.value
  let endpoint = genrateUrl(textForTranslation)

  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      minionTranslate.innerHTML = json.contents.translated
      //   console.log(json)
    })
    .catch((err) => handelError(err))
})
