const cardImage = document.querySelector('img');
const name = document.querySelector('h2');
const typeCard = document.querySelector('#typeofCard');
const attributes = document.querySelector('#atr');
const randomBtn = document.querySelector('#randomize');
const description = document.querySelector('#cardText');
const searchBtn = document.querySelector('#go');


searchBtn.addEventListener('click', checkInput)
randomBtn.addEventListener('click', randomBrando);

function checkInput(inputError) {
  const inputName = document.querySelector('input').value.toLowerCase();
  if (inputName === '' || inputError == '') {
    cardImage.src = 'https://cdn.glitch.global/4d419958-9f65-447a-be27-fd9cff5fcb6f/yugi.jpeg?v=1649907464199';
    name.innerText = `You got got`;
    typeCard.innerText = 'no card was retrieved - ';
    attributes.innerText = 'wild'
    description.innerText = 'I have no idea what that was';
  } else {
    getFetch(inputName)
  }
}

function getFetch(inputName) {
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + inputName;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
   
    cardImage.src = data.data[0].card_images[0].image_url;
    name.innerText = data.data[0].name;
    typeCard.innerText = data.data[0].type + ' - ';
    attributes.innerText = data.data[0].attribute;
    description.innerText = data.data[0].desc;
      })
      .catch(err => {
          checkInput('')
          console.log(`error ${err}`)
      });
}


function fixName() {
  return 'fixed';
}

function randomBrando() {
  const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    cardImage.src = data.card_images[0].image_url;
    name.innerText = data.name;
    
      typeCard.innerText = data.type + ' - ';
    attributes.innerText = data.attribute;
    
    description.innerText = data.desc;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



