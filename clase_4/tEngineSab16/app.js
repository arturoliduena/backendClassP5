var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs'); //Seteamos el template engine para que sea EJS.

let products = [
	{
			marca: 'Sony',
			modelo:'MDR7506',
			precio: '$100' ,
			descripcion: 'This extremely high quality, unobtrusive, lightweight reference headphone has been engineered to be comfortable to wear for extended periods, making it ideal for use in broadcast and studio environments. A 40mm PET diaphragm and neodymium magnet provide performance exceeding the requirements of digital audio sources.',
			imagen: "https://images-na.ssl-images-amazon.com/images/I/81TzTAx8weL._SX425_.jpg",
	},

	{
			marca: 'Beats',
			modelo:'Solo 2 Wired',
			precio: '$250' ,
			descripcion: 'The Beats By Dr. Dre Solo2 wired headphones combines expert engineering with enhanced clarity to deliver a unique listening experience. A greater range of sound, upgraded durability and sleek no-visible-screw design prove that Beats most popular headphones have been revamped. From the clarity to the power there is no equal, bringing you closer to the sound your favorite artist intended you to hear. These headphones were designed for you. From the custom fit feel of the frame to the angled ear cups that minimize sound interference without overheating your ears. Designed with a Remote Talk switch that allows you to take calls and control your music playback these headphones have it all. Comes with a carrying case.',
			imagen: "http://media.4rgos.it/i/Argos/4640648_R_Z001A?$Web$&$DefaultPDP570$",
	},

	{
	marca: 'Skull Candy',
			modelo:'hesh 2',
			precio: '$70' ,
			descripcion: 'Hesh 2 Wireless is the Bluetooth version of our iconic headphone with a new sleek profile and plush, synthetic leather ear pads. With on-board controls and a rechargeable battery, Hesh 2 Wireless lets you move freely with your playlist. Battery Status and Charging: Behind the left ear cup is a micro USB port for charging. An LED indicator will blink red when the battery is at 10%',
			imagen: "https://cdn8.bigcommerce.com/s-k11cg5mzh9/content/pdp_images/640x640_571_2083.jpg",
	}
]

app.get('/', function(req, res){
    res.render('list', { lista: products});
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/nuevoProducto', function(req, res){
	res.render('form')
})

app.post('/guardarProducto', urlencodedParser, function(req, res){
	products.push(req.body)
	res.redirect('/')
})

app.listen(2000, function(){
    console.log('listen port 2000');
});