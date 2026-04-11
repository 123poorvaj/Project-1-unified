let emailInputElement = document.getElementById('emailInput');
let optInputElement = document.getElementById('optInputElement');
let section_home = document.getElementById('section-Home');
let section_signin = document.getElementById('section_sign_in');
let Full_Name = document.getElementById('Full-Name');
let Name = document.getElementById('Name');
let Creareaccount = document.getElementById('Creareaccount');
let signIn = document.getElementById('signIn');
let signInOtp = document.getElementById('signInOtp');
let createOtp = document.getElementById('createOtp');
let furnituresofa = document.getElementById('furniture-sofa');
let verifyOtp = document.getElementById('verifyOtp');
let otpinput = document.getElementById('otpinput');
let sectionCoolTech = document.getElementById('sectionCoolTech');
let sectionbed = document.getElementById('sectionbed');
let sectionTable = document.getElementById('sectionTable');

/*sign In section code*/
function onCreateAccunt() {
    Full_Name.classList.remove('d-none');
    signIn.classList.remove('d-none');
    Creareaccount.classList.add('d-none');
    signInOtp.classList.add('d-none');
    createOtp.classList.remove('d-none');
}

function signInsendOtp() {
    if (emailInputElement.value === '') {
        alert('Enter your Email ');
        optInputElement.classList.add('d-none');
    } else {
        optInputElement.classList.remove('d-none');
        signInOtp.classList.add('d-none');
        createOtp.classList.add('d-none');
        verifyOtp.classList.remove('d-none')
    }
}

function getstAccount() {
    section_home.classList.remove('d-none');
    section_signin.classList.add('d-none');
    furnituresofa.classList.add('d-none');
    sectionbed.classList.add('d-none');
}

function createAccountsendOtp() {
    if (Name.value === '') {
        alert('Enter Full Name');
        optInputElement.classList.add('d-none');
    } else
    if (emailInputElement.value === '') {
        alert('Enter your Email ');
        optInputElement.classList.add('d-none');
    } else {
        optInputElement.classList.remove('d-none');
        signInOtp.classList.add('d-none');
        createOtp.classList.add('d-none');
        verifyOtp.classList.remove('d-none');
    }

}



function otpveryButton() {
    if (otpinput.value.length != 4) {
        alert('verify code is 4 digit number  please check');
    } else {
        section_home.classList.remove('d-none');
        section_signin.classList.add('d-none');
        furnituresofa.classList.add('d-none');
        sectionbed.classList.add('d-none');
    }
}

function onSignIn() {

    Full_Name.classList.add('d-none');
    Creareaccount.classList.remove('d-none');
    signIn.classList.add('d-none');
    signInOtp.classList.remove('d-none');
    createOtp.classList.add('d-none');
}
/*sign in section code end*/

/*-----------feedbacksend-------------*/
let stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", function() {
        selectedRating = this.dataset.value;

        stars.forEach((s) => s.classList.remove("active"));

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });
});

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();


    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;
    if (name === '') {
        alert("Enter Your Name!");
    } else if (feedback === '') {

        alert("Enter  feedback!");
    } else {
        let data = {
            name: name,
            rating: selectedRating,
            feedback: feedback
        };

        console.log("Feedback Received:", data);
        document.getElementById('feedback-result').textContent = 'Thank you for your feedback!';
        alert("Thank you for your feedback!");

        document.getElementById("feedbackForm").reset();

        stars.forEach((s) => s.classList.remove("active"));
    }
});
/*-----------feedbacksend end -------------*/

/*---All product section code---*/
function filterProducts(category) {

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (category === "all") {
            product.style.display = "block";
        } else if (product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}
/*----All production section code end-----*/

let allproducts = document.getElementById('allproducts');
let paymentSectio = document.getElementById("Payment-Section")
let cartsection = document.getElementById('cartsection');

function display(id) {
    paymentSectio.classList.add('d-none');
    document.getElementById('ordersucessfullsection').classList.add('d-none');
    section_home.classList.add('d-none');
    section_signin.classList.add('d-none');
    furnituresofa.classList.add('d-none');
    sectionCoolTech.classList.add('d-none');
    sectionbed.classList.add('d-none');
    sectionTable.classList.add('d-none');
    allproducts.classList.add('d-none');
    cartsection.classList.add('d-none');
    let onElement = document.getElementById(id)
    onElement.classList.remove('d-none');


}

/* adding cart ites */
const products = [{
        id: 1,
        name: "Oslo 3-Seater Fabric Sofa",
        rent: "1,234",
        deposit: "3,000",
        image: "./Oslo 3-seater fabric sofa .png"
    },
    {
        id: 2,
        name: "Nordic Solid Wood Queen Bed",
        rent: "1,599",
        deposit: "8,300",
        image: "./Nordic Solid Wood Queen Bed.png"
    },
    {
        id: 3,
        name: "Artisan Crossleg Dining Table",
        rent: "899",
        deposit: "4,000",
        image: "./Artisan Crossleg dining Table.png"
    },
    {
        id: 4,
        name: "Double Door Refrigerator",
        rent: "1,199",
        deposit: "7000",
        image: "./CoolTech Double-Door Refrigerator.png"
    },
    {
        id: 5,
        name: "Front Load Washer",
        rent: "999",
        deposit: "5,000",
        image: "./load washer.png"

    },
    {
        id: 6,
        name: "UltraView Smart TV",
        rent: "1,499",
        deposit: "5,500",
        image: "./ultraview smart tv.png"
    }

];
let cart = [];

function addToCart(id) {

    // Find product by id
    const product = products.find(p => p.id === id);

    // Add to cart array
    cart.push(product);

    console.log("Cart:", cart);

    // Update UI
    displayCart();
}



function displayCart() {
    let emptySection = document.getElementById("cart-empty");
    let cartSection = document.getElementById("cartitems");

    // ✅ CHECK CART
    if (cart.length === 0) {
        emptySection.classList.remove("d-none"); // show empty
        cartSection.classList.add("d-none"); // hide cart
        cartitemsCount.textContent = '0';
        cartCont.textContent = '0';
    } else {
        emptySection.classList.add("d-none"); // hide empty
        cartSection.classList.remove("d-none"); // show cart

        displayItems(); // 👈 your existing function to show items
    }
}
let cartitemsCount = document.getElementById('cart-items-Count');
let cartCont = document.querySelectorAll('.cartCont')

function displayItems() {
    let container = document.getElementById("Cart-items-container");

    container.innerHTML = cart.map((item, index) => `
        <li class="mb-2">
            <div class="cart-item d-flex align-items-center">
                <div>
                    <img src="${item.image}" class="product-imgg mr-3">
                </div>
                <div class="ms-3 flex-grow-1">
                <h5>${item.name}</h5>
                <p class="text-muted">₹${item.rent}/mo · Deposit: ₹${item.deposit}</p>
                <div class="tenure">
                    Tenure:
                <button class="tenure-btn">1M</button>
                    <button class="tenure-btn active">3M</button>
                    <button class="tenure-btn">6M</button>
                    <button class="tenure-btn">12M</button>
                </div>

                </div>

                    <button class="btn text-danger fs-4" onclick="removeItem(${index})">🗑</button>
                </div>
        </li>
    `).join(" ");

    cartitemsCount.textContent = cart.length;
    cartCont.forEach(el => {
        el.innerText = cart.length;
    });
}
let numlist = []

function addTolist(id) {

    // Find product by id
    const product = products.find(p => p.id === id);

    // Add to cart array
    numlist.push(product);

    console.log("Cart:", numlist);
}

function displaylist() {
    let numlist = document.getElementById("numberofitems");

    numlist.innerHTML = numlist.map((item, index) => `
       <li>
            <div class="d-flex align-items-center mt-3">
                <img src="./imag/Oslo 3-seater fabric sofa .jpeg" width="100px" height="100px" class="m-3" class="m-2" alt="item">
                <div>
                    <strong>Oslo 3-Seater Fabric Sofa</strong><br>
                    <small>3 months</small>
                </div>
            </div>
    </li>
    `).join(" ");
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function Paymentoption(id) {
    document.getElementById('upisection').classList.add('d-none');
    document.getElementById('DebitCardsection').classList.add('d-none');
    document.getElementById('cashondelevery').classList.add('d-none');
    document.getElementById(id).classList.remove('d-none');
}


// Track selected payment method
let selectedPayment = "";

// Show payment section
function Paymentoption(sectionId) {

    selectedPayment = sectionId;

    document.getElementById("upisection").classList.add("d-none");
    document.getElementById("DebitCardsection").classList.add("d-none");

    if (sectionId === "upisection") {
        document.getElementById("upisection").classList.remove("d-none");
    } else if (sectionId === "DebitCardsection") {
        document.getElementById("DebitCardsection").classList.remove("d-none");
    } else if (sectionId === "cashondelevery") {
        document.getElementById("cashondelevery").classList.remove("d-none");
    }
}


// Main validation
function validateForm() {

    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const date = document.getElementById("date").value;

    // Basic validation
    if (!address || !city || !pincode || !date) {
        alert("Please fill all address details");
        return;
    }

    // Pincode validation (6 digits)
    if (!/^[0-9]{6}$/.test(pincode)) {
        alert("Enter valid 6-digit pincode");
        return;
    }

    // Payment validation
    if (selectedPayment === "") {
        alert("Please select a payment method");
        return;
    }

    // UPI validation
    if (selectedPayment === "upisection") {
        const upi = document.getElementById("upi").value.trim();

        if (!/^[\w.-]+@[\w.-]+$/.test(upi)) {
            alert("Enter valid UPI ID");
            return;
        }
    }

    // Card validation
    if (selectedPayment === "DebitCardsection") {
        const card = document.getElementById("cardNumber").value.replace(/\s/g, "");
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        if (!/^[0-9]{16}$/.test(card)) {
            alert("Enter valid 16-digit card number");
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
            alert("Enter expiry in MM/YY format");
            return;
        }

        if (!/^[0-9]{3}$/.test(cvv)) {
            alert("Enter valid 3-digit CVV");
            return;
        }
    }

    // Success
    alert("Order Placed Successfully 🎉");

    // 1. Clear all input fields
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");

    // 2. Clear cart UI (if exists)
    const cartList = document.getElementById("cart-list");
    if (cartList) {
        cartList.innerHTML = "";
    }

    // 3. Clear cart array (if using)
    if (typeof cart !== "undefined") {
        cart = [];
    }

    // 4. Hide payment sections again
    document.getElementById("upisection").classList.add("d-none");
    document.getElementById("DebitCardsection").classList.add("d-none");
    document.getElementById('cashondelevery').classList.add('d-none');
    document.getElementById('ordersucessfullsection').classList.remove('d-none');
    document.getElementById('delivery-date').textContent = date;
    paymentSectio.classList.add('d-none');
    // 5. Reset payment selection
    selectedPayment = "";
}
/*pament sucessfull---*/
