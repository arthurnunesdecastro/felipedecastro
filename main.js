let dropdownMenu = document.querySelector('ul.pages')
let menuBtn      = document.querySelector('#menu')
let whatsappBtn  = document.getElementById('whatsapp')

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
	let number = "+554898276387";

	let name = document.getElementById('name').value;
	let ndapessoa = document.getElementById('number').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Oi%20meu%20nome%20é:%20" +name+ ",%20vim%20pelo%20seu%20site."+"%0a"
	+ "N°%20de%20Telefone:%20" +ndapessoa+ "%0a"
	+ "Mensagem:%20" + message;

	window.open(url, '_blank');
}

whatsappBtn.addEventListener('click', sendToWhatsApp)

