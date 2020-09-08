const response = [{
    "uniqueId": 1,
    "name": "Kappu",
    "product": "Bed",
    "description": '',
    "color": "green",
    "pricePerUnit": 2000,
    "ratings": 4,
    "brand": "killer",
    "category": "bed",
    "image": "bed",
    "qty": 0
},
{
    "uniqueId": 2,
    "name": "Kappu",
    "product": "Dining",
    "description": "",
    "color": "yellow",
    "pricePerUnit": 4000,
    "ratings": 5,
    "brand": "killer",
    "category": "dine",
    "image": "dine",
    "qty": 0
},
{
    "uniqueId": 3,
    "name": "Kappu",
    "product": "Sofa",
    "description": "",
    "color": "blue",
    "pricePerUnit": 6000,
    "ratings": 2,
    "brand": "killer",
    "category": "sofa",
    "image": "sofa",
    "qty": 0
}, {
    "uniqueId": 4,
    "name": "Kappu",
    "product": "Chair",
    "description": "",
    "color": "black",
    "pricePerUnit": 8000,
    "ratings": 3,
    "brand": "killer",
    "category": "chair",
    "image": "chair",
    "qty": 0
}, {
    "uniqueId": 5,
    "name": "Kappu",
    "product": "Bed",
    "description": '',
    "color": "green",
    "pricePerUnit": 2000,
    "ratings": 4,
    "brand": "killer",
    "category": "bed",
    "image": "bed",
    "qty": 0
},
{
    "uniqueId": 6,
    "name": "Kappu",
    "product": "Dining",
    "description": "",
    "color": "yellow",
    "pricePerUnit": 4000,
    "ratings": 5,
    "brand": "killer",
    "category": "dine",
    "image": "dine",
    "qty": 0
},
{
    "uniqueId": 7,
    "name": "Kappu",
    "product": "Sofa",
    "description": "",
    "color": "blue",
    "pricePerUnit": 6000,
    "ratings": 2,
    "brand": "killer",
    "category": "sofa",
    "image": "sofa",
    "qty": 0
}, {
    "uniqueId": 8,
    "name": "Kappu",
    "product": "Chair",
    "description": "",
    "color": "black",
    "pricePerUnit": 8000,
    "ratings": 3,
    "brand": "killer",
    "category": "chair",
    "image": "chair",
    "qty": 0
}]
const categoryValue = [{ "value": "black", "name": "Black" },
{ "value": "yellow", "name": "Yellow" },
{ "value": "blue", "name": "Blue" },
{ "value": "green", "name": "Green" }]

var objectArrayToUpdate = response;
var cart = [];

/**
 * this function helps to load  home page
 */
function loadHomePage() {
    objectArrayToUpdate = response;
    setTimeout(call(), 30000);
    document.getElementById('collection').style['display'] = 'none';
    document.getElementById('color').style['display'] = 'none';
    document.getElementById('category').style['display'] = 'none';
}

/**
 * this function helps to render object on the screen
 */
function call() {
    var output = document.getElementById('content')
    var filters = document.getElementById('filters')
    output.innerHTML = objectArrayToUpdate.map(prd => {
        return `
    <card class="col-sm-12 col-md-3 cardStyle">
    <div class="image-section" onclick=getDetails(`+ JSON.stringify(prd) + `)>
        <img src="${prd.image}.jpg" alt="" height="200px" width="100%">
        <p><strong>${prd.name}</strong></p>
    </div>

    <div class="col-sm-12" onclick=getDetails(`+ JSON.stringify(prd) + `)>
    <div class="row">
    <div class="col-sm-4">
    <span style="color: gray;">
    ${prd.product}
    </span>

     </div>
     <div class="col-sm-5 offset-3">
         <span  style="color: gray;">
         &#36 ${prd.pricePerUnit}
         </span>
     </div>
    </div>
    
    </div>
    <div class="col-sm-12">
        <div class="row">
        <div class="col-sm-4">
        ${prd.ratings} &#42;
         </div>
         <div class="col-sm-4 offset-4">
             <span  style="color: gray;">
             <i>&#xf07a;</i>
             </span>
         </div>
        </div>
        <div>
        <button class="btn btn-success btn-sm" onclick=addToCart(`+ JSON.stringify(prd) + `)>Add to cart</button>
        </div>
        
        </div>
    </card>`
    })
}

/**
 * this function helps to display product after it is selected from search result
 */

function display() {
    var output = document.getElementById('content')
    output.innerHTML = objectArrayToUpdate.map(prd => {
        return `
        <button id="backButton" class="btn btn-sm btn-success" onclick="goBack()">
        Back to search
        </button>
     <card class="col-sm-12" style="margin-top:5px">
        <div class="row">
        <div class="col-sm-6">
        <img src="${prd.image}.jpg" alt="" height="100%" width="100%" class="col-sm-12">
        </div> 
        <div class="col-sm-6">
            <div>
                <p style="color: gray;">${prd.product}</p>
            </div>
            <div>
                <h2 style="color: black;">${prd.name}</h2>
            </div>
            <div>
                <p style="font-size: 13px;">${prd.description}</p>
            </div>
            <div>
                <label for="color">color
                </label>
                <div style="background-color:${prd.color};width:25px;height:25px;border-radius:50px"></div>
            </div>

            <div class="col-sm-12">
                <div class="row" style="margin-top:2em">
                    <div class="col-md-4 col-sm-12">
                        <label for="priceperunit">Price per unit</label>
                        <h3> &#36  ${prd.pricePerUnit}</h3>
                    </div>
                    <div class="col-md-4 col-sm-12">
                       <button class="btn btn-dark btn-lg">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </card>
       `
    })
}

/**
 * this function helps generate color tags for color filter
 */
function generateColorFilter() {
    var output = document.getElementById('color')
    output.innerHTML = categoryValue.map(prd => {
        return `
        <div class="col-sm-12">
        <input class="color" onclick="filterOnColors()" type="checkbox" name="color[]" value="${prd.value}" >${prd.name}
    </div>
       `
    })
}

/**
 * this function helps to get details of the product after it is selected from search page
 * @data is the product that is selected
 */

function getDetails(data) {
    objectArrayToUpdate = [data]
    document.getElementById('filters').hidden = true;
    display()
}

/**
 * this function helps back. from display screen to search screen
 */

function goBack() {
    objectArrayToUpdate = response;
    document.getElementById('filters').hidden = false;
    call()
}

/**
 * this function helps to extract data from the collecteion on basis of price range
 */

function filterOnRange() {
    var rangeValue = document.getElementById('priceRange').value;
    objectArrayToUpdate = response.filter(items => { if (items.pricePerUnit <= rangeValue) return items })
    if (objectArrayToUpdate.length > 0) {
        call()
    } else {
        document.getElementById('content').innerHTML = "No result found"
    }

}

/**
 * this function helps to load  expand and collapse collection id
 */

function openCollectionFilter() {
    var collectionFilter = document.getElementById('collection').style['display']
    if (collectionFilter === 'block') {
        document.getElementById('collection').style['display'] = 'none';
    } else {
        document.getElementById('collection').style['display'] = 'block';

    }
}
/**
 * this function helps to load  expand and collor collection id
 */
function openColorFilter() {
    var collectionFilter = document.getElementById('color').style['display']
    if (collectionFilter === 'block') {
        document.getElementById('color').style['display'] = 'none';
    } else {
        document.getElementById('color').style['display'] = 'block';
    }
}
/**
 * this function helps to load  expand and collapse category filter id
 */
function openCategoryFilter() {
    var collectionFilter = document.getElementById('category').style['display']
    if (collectionFilter === 'block') {
        document.getElementById('category').style['display'] = 'none';
    } else {
        document.getElementById('category').style['display'] = 'block';
    }
}

/**
 * this function helps to load  data on basis of selected color
 */
function filterOnColors() {
    var selectedValue = []
    var colorFilter = document.getElementsByClassName('color')
    for (var i = 0; i < colorFilter.length; i++) {
        if (colorFilter[i].checked) {
            selectedValue.push(colorFilter[i].value);
        }
    }
    if (selectedValue.length > 0) {
        objectArrayToUpdate = response.filter(items => { if (selectedValue.indexOf(items.color) !== -1) return items })
    } else {
        objectArrayToUpdate = response;
    }
    call()
}

/**
 * this function helps to load  data on basis of selected collection
 */
function filterOnCollection() {
    var selectedCollectionValue = []
    var collectionFilter = document.getElementsByClassName('collection')
    for (var i = 0; i < collectionFilter.length; i++) {
        if (collectionFilter[i].checked) {
            selectedCollectionValue.push(collectionFilter[i].value);
        }
    }
    if (selectedCollectionValue.length > 0) {
        objectArrayToUpdate = response.filter(items => { if (selectedCollectionValue.indexOf(items.category) !== -1) return items })
    } else {
        objectArrayToUpdate = response;
    }
    call()
}
/**
 * this function helps to load  data on basis of selected category
 */

function filterOnCategory() {
    var selectedcategoryValue = []
    var categoryFilter = document.getElementsByClassName('category')
    for (var i = 0; i < categoryFilter.length; i++) {
        if (categoryFilter[i].checked) {
            selectedcategoryValue.push(categoryFilter[i].value);
        }
    }
    if (selectedcategoryValue.length > 0) {
        objectArrayToUpdate = response.filter(items => { if (selectedcategoryValue.indexOf(items.category) !== -1) return items })
    } else {
        objectArrayToUpdate = response;
    }
    call()
}

/**
 * this function helps add an object to cart
 * @data is the selected object for the cart
 */
function addToCart(data) {
    cart.push(data)
}
/**
 * this function helps to load  data of cart array
 */
function loadcartPage() {
    var tempCart = [];
    var output = document.getElementById('content')
    if (cart.length < 1) {
        output.innerHTML = "Your cart is empty ."
    } else {
        cart.forEach(element => {
            if (tempCart.length < 1) {
                tempCart.push(element)
            } else {
                var tempCart1 = [...new Set(tempCart.map(element => element.uniqueId))]
                if (element.uniqueId && tempCart1.indexOf(element.uniqueId) == -1) {
                    tempCart.push(element)
                }
            }
        });
        tempCart.forEach(tempCartItem => {
            cart.forEach(cartItem => {
                if (tempCartItem.uniqueId && cartItem.uniqueId && tempCartItem.uniqueId === cartItem.uniqueId) {
                    tempCartItem.qty += 1;
                }
            });
        });
        objectArrayToUpdate = tempCart;
        output.innerHTML = objectArrayToUpdate.map(prd => {
            return `
         <card class="col-sm-10" style="margin-top: 5px;
         border: 1px solid gray;
         width: fit-content;
         box-shadow: 1px 1px 1px 1px;">
            <div class="row">
            <div class="col-sm-3">
            <img src="${prd.image}.jpg" alt="" height="200px" width="200px" class="col-sm-12">
            </div> 
            <div class="col-sm-9">
                <div class="row">
                <div class="col-sm-6">
                <p style="color: gray;">${prd.product}</p>
                </div>
                <div class="col-sm-4">
                <p><strong>Quantity</strong></p>
                <p style="color: Black;">${prd.qty}</p>
                </div>
                </div>
                <div>
                    <h2 style="color: black;">${prd.name}</h2>
                </div>
                <div>
                    <p style="font-size: 13px;">${prd.description}</p>
                </div>
                <div>
                    <label for="color">color
                    </label>
                    <div style="background-color:${prd.color};width:25px;height:25px;border-radius:50px"></div>
                </div>
    
                <div class="col-sm-12">
                    <div class="row" style="margin-top:1em">
                        <div class="col-sm-4">
                            <label for="priceperunit">Price per unit</label>
                            <h5> &#36  ${prd.pricePerUnit}</h5>
                        </div>
                        <div class="col-sm-4 offset-sm-4">
                           <button class="btn btn-dark btn-md">Buy Now</button>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
            </card>
           `
        })
    }
}
/**
 * this function helps to load  data on the basis of search data
 */
function searchProduct() {
    var output = document.getElementById('content')
    var searchValue = document.getElementById('product').value;
    var selectedSearchValue = response.filter(items => { if (items.category === searchValue) return items })
    if (selectedSearchValue.length > 0) {
        objectArrayToUpdate = selectedSearchValue;
        call();
    } else {
        output.innerHTML = "No result found."
    }
}

