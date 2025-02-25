
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        displayProducts(products)

    } catch (error) {
        console.log('Error fetching products: ', error)
    }
    
}

const displayProducts = (products) => {
    const productList = document.getElementById('poduct-list')
    products.forEach(product => {
        const parentDiv = document.createElement('div')
        parentDiv.classList.add('product')
        parentDiv.innerHTML =`
        <h3>${product.title}</h3>
       <image src="${product.image}" alt="${product.title}">
        <p>${product.price}</p>
        <p>${product.category}</p>
        <button onclick="addToCart()">Add To Cart </button>`
        
        productList.appendChild(parentDiv)
    })

}

const cartCount = document.getElementById('cart-count')

let cart = {}
const addToCart = (productId, productName) => {
    if ( cart[productId]) {
        cart[productId].quantity++
    } else {
        cart[productId] = { name: productName, quantity:1 }
    }
    updateCartCount()
    
}

const updateCartCount = () => {
    let totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0) 
    // Object.values(cart); 
    // Output: [ { name: "Product 1", quantity: 2 }, { name: "Product 2", quantity: 1 } ]
    //Since Object.values(cart) gives us an array of product objects, we use .reduce() to sum up their quantity values:

    cartCount.textContent = totalItems
}
const addTwoNumber=(a,b)=>{
return a+b;
}
addTwoNumber(10,20);

document.addEventListener("DOMContentLoaded", fetchProducts)


