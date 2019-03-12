// landing page animation: make the bars go from spanning the page to having no width. called onload on index.html
const reveal = () => {
	var element = document.getElementsByClassName('bar');
	var width = 100;
	var frame = () => {
		if (width == 0) {
			clearInterval(id);
		} else {
			width--;
			var i;
			for (i = 0; i < element.length; i++) {
				element[i].style.width = width + "%";
			}
		}
	}
	var id = setInterval(frame, 30);
	frame();
}


// ############## NAIL POLISHES ################

// set variables for convenient reference
let Brand = document.getElementById('brand');
let Name = document.getElementById('name');
let Description = document.getElementById('description');
let Price = document.getElementById('price');
let MainImg = document.getElementById('mainimg');
let Bottle = document.getElementById('bottle');
let Swatch = document.getElementById('swatch');


// build class for nail polish objects
class nailPolish {
	constructor(brand, name, description, price, count, images){
		this.brand = brand;
		this.name = name;
		this.description = description;
		this.price = price;
		this.count = count;
		this.images = images;
	}
	display() { // called onload on each product page
		Brand.innerHTML = this.brand;
		Name.innerHTML = this.name;
		Description.innerHTML = this.description;
		Price.innerHTML = `$${this.price}`;
		MainImg.src = `../${this.images[0]}`;
		Bottle.src = `../${this.images[0]}`;
		Swatch.src = `../${this.images[1]}`;
	}
}

const AECrownOfThistles = new nailPolish('A England', 'Crown of Thistles', 'Orchid with holographic sparkle.', 10, 0, ['../media/a-england-crown-of-thistles.jpg', '../media/crown-of-thistles-swatch.jpg']);

const AEJeReviens = new nailPolish('A England', 'Je Reviens', 'Pale lilac with holographic sparkle.', 10, 0, ['../media/a-england-je-reviens.jpg', '../media/je-reviens-swatch.jpg']);

const AESaintGeorge = new nailPolish('A England', 'Saint George', 'Saturated holographic teal.', 10, 0, ['../media/a-england-saint-george.jpg', '../media/saint-george-swatch.png']);

const CadHugTheDog = new nailPolish('Cadillacquer', 'Hug the Dog', 'Light blue-green crelly with holo and multichrome red flakes.', 10, 0, ['../media/cadillacquer-hug-the-dog.jpg', '../media/hug-the-dog-swatch.jpg']);

const CadSookie = new nailPolish('Cadillacquer', 'Sookie', 'Baby pink crelly with blue glitter.', 10, 0, ['../media/cadillacquer-sookie.jpg', '../media/sookie-swatch.jpg']);

const CadVictoria = new nailPolish('Cadillacquer', 'Victoria', 'Gray crelly with variously-sized bright pink glitter.', 10, 0, ['../media/cadillacquer-victoria.jpg', '../media/victoria-swatch.jpg']);

const CadWearItLikeArmour = new nailPolish('Cadillacquer', 'Wear It Like Armour', 'Lavender crelly with variously-sized copper glitter.', 10, 0, ['../media/cadillacquer-wear-it-like-armour.jpg', '../media/wear-it-like-armour-swatch.jpg']);

const CirqueGarnet = new nailPolish('Cirque Colors', 'Garnet', 'Holographic burgundy red.', 10, 0, ['../media/cirque-garnet.jpg', '../media/garnet-swatch.jpg']);

const CirqueNocturne = new nailPolish('Cirque Colors', 'Nocturne', 'Periwinkle blue with teal shimmer and delicate holographic sparkle.', 10, 0, ['../media/cirque-nocturne.jpg', '../media/nocturne-swatch.jpg']);

const CirqueVelvetine = new nailPolish('Cirque Colors', 'Velvetine', 'Muted slate blue with copper shimmer and delicate holographic sparkle.', 10, 0, ['../media/cirque-velvetine.jpg', '../media/velvetine-swatch.jpg']);

const ILNPAbundanceH = new nailPolish('I Love Nail Polish', 'Abundance (H)', 'Red-bronze-gold multichrome with strong copper shimmer and added holographic shine.', 10, 0, ['../media/ilnp-abundance-h.jpg', '../media/abundance-h-swatch.jpg']);

const ILNPCityscape = new nailPolish('I Love Nail Polish', 'Cityscape', 'Black jelly with scattered holographic sparkle.', 10, 0, ['../media/ilnp-cityscape.jpg', '../media/cityscape-swatch.jpg']);

const ILNPCozyMittens = new nailPolish('I Love Nail Polish', 'Cozy Mittens', 'Palest gray with fine golden flakes.', 10, 0, ['../media/ilnp-cozy-mittens.jpg', '../media/cozy-mittens-swatch.jpg']);

const ILNPGoodVibes = new nailPolish('I Love Nail Polish', 'Good Vibes', 'Bright juicy cobalt blue jelly with scattered holographic sparks.', 10, 0, ['../media/ilnp-good-vibes.jpg', '../media/good-vibes-swatch.jpg']);

const ILNPOpenFields = new nailPolish('I Love Nail Polish', 'Open Fields', 'Multichrome blue to green flakes in a clear base.', 10, 0, ['../media/ilnp-open-fields.jpg', '../media/open-fields-swatch.jpg']);

const KBSViciousCircles = new nailPolish('KBShimmer', 'Vicious Circles', 'Scarlet red jelly with silver micro bars and holographic circle and hex glitter.', 10, 0, ['../media/kbshimmer-vicious-circles.jpg', '../media/vicious-circles-swatch.jpg']);

const KBSYouAutumnKnow = new nailPolish('KBShimmer', 'You Autumn Know', 'Soft white crelly with fuchsia, gold, and orange glitter.', 10, 0, ['../media/kbshimmer-you-autumn-know.jpg', '../media/you-autumn-know-swatch.jpg']);




// changing image for alternate pictures of product
const insert1 = () => {
	if (!MainImg.src.match(Bottle.src)) {
		MainImg.src = Bottle.src;
	}
};

const insert2 = () => {
	if (!MainImg.src.match(Swatch.src)) {
		MainImg.src = Swatch.src;
	}
};
// if the image doesn't match the one being clicked, make it match.


// can I get the image that is currently the main image to be fully opaque?
// this makes both of them fully and permanently opaque instead, which i don't understand:
// if (MainImg.src.match(Bottle.src)) {
// 	Bottle.style.opacity = '1';
// } else {
// 	Bottle.style.opacity = '0.7';
// };

// if (MainImg.src.match(Swatch.src)) {
// 	Swatch.style.opacity = '1';
// } else {
// 	Swatch.style.opacity = '0.7';
// };


let cartAmt = 0;
let cartItems = [];

// to make sure the cart count in the nav bar is correct
if (localStorage.cartAmt === undefined) {
	document.getElementById('shopcart').innerHTML = `CART (${cartAmt})`;
} else if (localStorage.cartAmt) {
	document.getElementById('shopcart').innerHTML = `CART (${localStorage.cartAmt})`;
};

if (localStorage.cartItems === undefined) {
	cartItems = [];
} else if (localStorage.cartItems) {
	cartItems = JSON.parse(localStorage.cartItems); // since localStorage can only store strings
};


// associated with the dead css&html code
// const openModal2 = () => {
// 	document.getElementById('cartmodal').style.display = "block";
// 	document.getElementById('cartmodal').style.opacity = "1";
// }


// called on button click on product page
// add item to cart and to cartItems array
const add = (polish) => {
	if (localStorage.cartItems === undefined) {
		cartAmt = 0;
		localStorage.cartAmt = cartAmt;
	} else if (localStorage.cartItems) {
		cartAmt = JSON.parse(localStorage.cartItems).length;
		localStorage.cartAmt = cartAmt;
	}
	cartItems.push(polish);
	localStorage.cartItems = JSON.stringify(cartItems);
	cartAmt = JSON.parse(localStorage.cartItems).length;
	localStorage.cartAmt = cartAmt;
	document.getElementById('shopcart').innerHTML = `CART (${cartAmt})`;
	// openModal2();
};



// called onload on cart page
// i'm so proud i figured this out, y'all
const showCart = () => {
	let div = document.getElementById('cartcontents'); // shorthand
	if (localStorage.cartItems) { //if there's something in the cart
		let i;
		let totalPrice = 0;
		cartItems = JSON.parse(localStorage.cartItems);
		for (i = 0; i < cartItems.length; i++) { //iterate through the cart and turn 'em into little lists of key values'
			let ul = document.createElement('ul');
			div.insertBefore(ul, div.childNodes[0]); // and i want it to go before the price at the bottom

			let ul2 = document.createElement('ul');
			ul.insertBefore(ul2, ul.childNodes[1]);
			let liBrand = document.createElement('li');
			let brandText = document.createTextNode(cartItems[i].brand);
			liBrand.appendChild(brandText);
			ul2.appendChild(liBrand);

			let liName = document.createElement('li');
			let nameText = document.createTextNode(cartItems[i].name);
			liName.appendChild(nameText);
			ul2.appendChild(liName);

			let liPrice = document.createElement('li');
			let priceText = document.createTextNode(`$${Number(cartItems[i].price)}`);
			liPrice.appendChild(priceText);
			ul.appendChild(liPrice);

			liPrice.className = 'price';
			ul.className = 'cartitem';
			ul2.className = 'itemdetails';

			let Image = document.createElement('img');
			Image.src = cartItems[i].images[0];
			Image.className = 'cartimg';
			ul.appendChild(Image);

			totalPrice += Number(cartItems[i].price); // total all the prices of the items in the cart

		};
		document.getElementById('total').innerHTML = `Total: $${totalPrice}`;
	} else {
		document.getElementById('total').innerHTML = 'Cart is empty.'
		document.getElementById('total').style.textAlign = 'center';
		document.getElementById('total').style.color = "#d6e0ef";
		// if there's nothing in the cart, tell me it's empty but center it in the space
	};
};

const openThxModal = () => {
	document.getElementById('thanksmodal').style.display = "block";
};
const closeThxModal = () => {
	document.getElementById('thanksmodal').style.display = "none";
};


// called on button click on checkout page
// clear localStorage and update the cart contents section
const checkout = () => {
	localStorage.removeItem('cartAmt');
	localStorage.removeItem('cartItems');
	cartAmt = 0
	cartItems = [];
	document.getElementById('shopcart').innerHTML = `CART (${cartAmt})`;
	document.getElementById('cartcontents').innerHTML = `<p id="total"></p>`;
	document.getElementById('total').innerHTML = 'Cart is empty.';
	document.getElementById('total').style.textAlign = 'center';
	document.getElementById('total').style.color = '#d6e0ef';
	document.getElementById('thankyoumodal').innerHTML = `Thank you for your purchase!`
	openThxModal();
};



// called onload on home.html
const slideshow = () => {
	let slideImage = document.getElementById('images');
	let link = document.getElementById('link');
	let imgArray = ['../media/a-england-crown-of-thistles.jpg', '../media/a-england-je-reviens.jpg', '../media/a-england-saint-george.jpg', '../media/cadillacquer-hug-the-dog.jpg', '../media/cadillacquer-sookie.jpg', '../media/cadillacquer-victoria.jpg', '../media/cadillacquer-wear-it-like-armour.jpg', '../media/cirque-garnet.jpg', '../media/cirque-nocturne.jpg', '../media/cirque-velvetine.jpg', '../media/ilnp-abundance-h.jpg', '../media/ilnp-cityscape.jpg', '../media/ilnp-cozy-mittens.jpg', '../media/ilnp-good-vibes.jpg', '../media/ilnp-open-fields.jpg', '../media/kbshimmer-vicious-circles.jpg', '../media/kbshimmer-you-autumn-know.jpg'];
	let linkArray = ["aEngland/crown-of-thistles.html", "aEngland/je-reviens.html", "aEngland/saint-george.html", "cadillacquer/hug-the-dog.html", "cadillacquer/sookie.html", "cadillacquer/victoria.html", "cadillacquer/wear-it-like-armour.html", "cirque/garnet.html", "cirque/nocturne.html", "cirque/velvetine.html", "ILNP/abundance-h.html", "ILNP/cityscape.html", "ILNP/cozy-mittens.html", "ILNP/good-vibes.html", "ILNP/open-fields.html", "kbshimmer/vicious-circles.html", "kbshimmer/you-autumn-know.html"];
	let index = 1;
	let linkIndex = 1;

	const slide = () => {
		slideImage.src = imgArray[index++ % imgArray.length];
		link.href = linkArray[linkIndex++ % linkArray.length];
	}
	setInterval(slide, 2000);
};


// for modal
const openModal = () => {
	document.getElementById('modalwindow').style.display = "block";
};
const closeModal = () => {
	document.getElementById('modalwindow').style.display = "none";
};

// called on button click on contact.html
const submitMessage = () => {
	let name = document.getElementById('name').value;
	if (!name) {
		document.getElementById('modalmessage').innerHTML = `Thank you for your message! We'll respond within 48 hours.`
	} else {
		document.getElementById('modalmessage').innerHTML = `Thank you for your message, ${name}! We'll respond within 48 hours.`
	}
	openModal();
};


// called onload on generator page
const generate = () => {
	let adjectives = ['sparkly', 'metallic', 'neon', 'holographic', 'glitter']
	let colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'gold', 'silver', 'turquoise', 'burgundy', 'maroon'];
	let polishTypes = ['creme', 'jelly', 'crelly'];
	let num1 = Math.floor(Math.random() * adjectives.length);
	let num2 = Math.floor(Math.random() * colorOptions.length);
	let num3 = Math.floor(Math.random() * polishTypes.length);
	document.getElementById('random').innerHTML = `a ${adjectives[num1]} ${colorOptions[num2]} ${polishTypes[num3]} polish?`;
};
