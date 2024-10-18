let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Deligent Frock',
        image: 'Frock 1.JPEG',
        price: 78
    },
    {
        id: 2,
        name: 'Deligent Frock',
        image: 'Frock 2.JPEG',
        price: 78
    },
    {
        id: 3,
        name: 'Deligent Frock',
        image: 'Frock 3.JPEG',
        price: 78
    },
    {
        id: 4,
        name: 'Deligent Frock',
        image: 'Frock 4.JPEG',
        price: 78
    },
    {
        id: 5,
        name: 'Deligent Frock',
        image: 'Frock 5.JPEG',
        price: 78
    },
    {
        id: 6,
        name: 'Deligent Frock',
        image: 'Frock 6.JPEG',
        price: 78
    },
    ,
    {
        id: 7,
        name: 'Hoodiee',
        image: 'Hoodie 2.JPEG',
        price: 78
    },
    {
        id: 8,
        name: 'Hoodiee',
        image: 'Hoodie.JPEG',
        price: 78
    },
    {
        id: 9,
        name: 'Office Trousers',
        image: 'Office 2.JPEG',
        price: 78
    },,
    {
        id: 10,
        name: 'Office Trousers',
        image: 'Office 3.JPEG',
        price: 78
    },
    {
        id: 11,
        name: 'Office Trousers',
        image: 'Office.JPEG',
        price: 78
    },
    {
        id: 12,
        name: 'Office Trousers',
        image: 'Tr 1.JPEG',
        price: 78
    },,
    {
        id: 13,
        name: 'Office Trousers',
        image: 'Tr 2.JPEG',
        price: 78
    },
    {
        id: 14,
        name: 'Office Trousers',
        image: 'Tr 3.JPEG',
        price: 78
    },
    {
        id: 15,
        name: 'Office Trousers',
        image: 'Tr 4.JPEG',
        price: 78
    },
    {
        id: 16,
        name: 'Office Trousers',
        image: 'Tr 5.JPEG',
        price: 78
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}