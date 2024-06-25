let dropdownMenu = document.querySelector('ul.pages')
let menuBtn      = document.querySelector('.menu')
let sendMsg  = document.getElementById('send')
let nextBtn = document.getElementById('next');

document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('#items');
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;
    let index = 0;

    document.querySelector('#next').addEventListener('click', () => {
        if (index < totalItems - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    document.querySelector('#prev').addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        itemsContainer.style.transform = `translateX(-${index * 100}%)`;
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            }
        });
    }

    // Inicializar o carrossel
    updateCarousel();
});

let refreshInterval = setInterval(() => {
        nextBtn.click();
}, 30000)




const toggleMenu = () => {
    if (dropdownMenu.className == 'pages'){
        dropdownMenu.className += ' open'
    } else {
        dropdownMenu.className = 'pages close'
        setTimeout(() => {dropdownMenu.className = 'pages'}, 500)
    }
}

document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !menuBtn.contains(event.target)){
        if (dropdownMenu.className == 'pages open'){
            dropdownMenu.className = 'pages close'
            setTimeout(() => {dropdownMenu.className = 'pages'}, 500)
        }
    }
})

menuBtn.addEventListener('click', toggleMenu)


const sendToWhatsApp = () => {
	let number = "+554896931460";
    let hour = new Date().getHours()
    let timeofdday = ''
    if (hour <= 12){
        timeofdday = '*Bom Dia Dr. Felipe, vim pelo seu site.*';
    }
    if (hour < 17){
        timeofdday = '*Boa Tarde Dr. Felipe, vim pelo seu site.*';
    }
    if (hour >= 17){
        timeofdday = '*Boa Noite Dr. Felipe, vim pelo seu site.*';
    }
	let name = document.getElementById('name').value;
	let ndapessoa = document.getElementById('number').value;
	let message = document.getElementById('message').value;
    let text = timeofdday+"%0a"+"%0a"
    +"*Meu nome é:* " +name+"%0a"
	+ "*N° de Telefone:* " +ndapessoa+ "%0a"
	+ "*Meu caso é o seguinte:* " + message;
    text = text.replace(/\n/g, '%0a').replace(' ', '%20');
	var url = "https://wa.me/" + number + "?text="+text;
	window.open(url, '_blank');
}

sendMsg.addEventListener('click', sendToWhatsApp)

