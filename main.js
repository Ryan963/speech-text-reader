const main = document.querySelector('main')
const voices = document.getElementById('voices')
const textArea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.querySelector('.close')
const textBox = document.getElementById('text-box')
const message = new SpeechSynthesisUtterance();
function createBox(){
    const data = [
        {
          image: './img/drink.jpg',
          text: "I'm Thirsty"
        },
        {
          image: './img/food.jpg',
          text: "I'm Hungry"
        },
        {
          image: './img/tired.jpg',
          text: "I'm Tired"
        },
        {
          image: './img/hurt.jpg',
          text: "I'm Hurt"
        },
        {
          image: './img/happy.jpg',
          text: "I'm Happy"
        },
        {
          image: './img/angry.jpg',
          text: "I'm Angry"
        },
        {
          image: './img/sad.jpg',
          text: "I'm Sad"
        },
        {
          image: './img/scared.jpg',
          text: "I'm Scared"
        },
        {
          image: './img/outside.jpg',
          text: 'I Want To Go Outside'
        },
        {
          image: './img/home.jpg',
          text: 'I Want To Go Home'
        },
        {
          image: './img/school.jpg',
          text: 'I Want To Go To School'
        },
        {
          image: './img/grandma.jpg',
          text: 'I Want To Go To Grandmas'
        }
      ];
    
    data.forEach(addNewItem)
}


function getVoices(){
    let voicesList = speechSynthesis.getVoices()
    voicesList.forEach(voice => {
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        voices.appendChild(option)
    })
}
function setTextMessage(text){
    message.text = text
}


function speakText(){
    speechSynthesis.speak(message)
}


function changeVoice(e){
    let voicesList = speechSynthesis.getVoices()
    message.voice = voicesList.find(voice => voice.name === e.target.value)
}


function addNewItem(item){
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = ` <img src="${item.image}" alt = "${item.text}">
        <div class="info"><h3>${item.text}</h3></div>`
    box.addEventListener('click', () => {
        setTextMessage(item.text)
        speakText()
        box.classList.add('active')
        setTimeout(() => {box.classList.remove('active')}, 800);
    });
    main.appendChild(box)
}



function events(){
    createBox()
    getVoices()
    toggleBtn.addEventListener('click',() =>{
        textBox.classList.toggle('show')
    })
    closeBtn.addEventListener('click', () => {
        textBox.classList.remove('show')
    })
    speechSynthesis.addEventListener('voiceschanged',getVoices)
    voices.addEventListener('change', changeVoice)
    readBtn.addEventListener('click', () => {
        setTextMessage(textArea.value)
        speakText()
    })
}
events()















