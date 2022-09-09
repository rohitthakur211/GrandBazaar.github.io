const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <p class="brand-logo">GrandBazaar.in</p>
            <div class="nav-items">
            <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn"><img src="img/search.PNG" alt=""></button>
                </div>
                <a href="login.html"><b>Account</b></a>
                <br><br><br>
                <a href="cart.html"><b>cart</b></a> <br>
                <a href="pay.html"><b>payment</b></a>
                
            </div>
        </div>
        <ul class="links-container">
        
        <li class="link-item"><a href="index.html" class="link">HOME</a></li>
            <li class="link-item"><a href="smartphone.html" class="link">SmartPhones</a></li>
            <li class="link-item"><a href="book.html" class="link">Books</a></li>
            <li class="link-item"><a href="electronics.html" class="link">Electronics</a></li>
            <li class="link-item"><a href="https://www.amazon.in/shoes/s?k=shoes" class="link">Shoes</a></li>
            <li class="link-item"><a href="https://www.amazon.in/watches/s?k=watches" class="link">Watch</a></li>
            <li class="link-item"><a href="https://www.amazon.in/gp/bestsellers/apparel/1968024031" class="link">Menclothes</a></li>
            <li class="link-item"><a href="https://www.amazon.in/Womens-clothing/b?ie=UTF8&node=1953602031" class="link">WomenClothes</a></li>
            
            <li class="link-item"><a href="https://www.amazon.in/Sports/b?ie=UTF8&node=1984443031" class="link">sports</a></li>
            <li class="link-item"><a href="https://www.amazon.in/bags/s?k=bags" class="link">Bags</a></li>
            <li class="link-item"><a href="https://www.amazon.in/b?ie=UTF8&node=10892567031" class="link">Kitchen</a></li>
            
            
        </ul>
    `;
}

createNav();


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// search bar 

const searchInput = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search');
let searchLink = "https://www.amazon.in/s?k=";

searchBtn.addEventListener('click', () => {
    if (searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
})



const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <h1 id="lobo"> Brand Bazaar</h1>
        
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">
    AbeBooks ,     Books,     art & collectibles	,	    Web Services ,       Scalable Cloud , 
    Computing Services	,	Audible  Download , Audio Books		,DPReview    ,  Digital
    Photography	,	IMD  Movies, TV & Celebrities
     
    Shopbop
    Designer,
    Fashion Brands,		Grand Bazaar Business,
    Everything For
    Your Business	,	Prime Now,
    2-Hour Delivery
    on Everyday Items.		 Prime Music,
    90 million songs, ad-free
    Over 15 million podcast episodes		 
    Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2022, GrandBazaar.com, Inc. or its affiliates</p>
    <p class="info">support emails - help@brandbazaar.com, customersupport@brandbazaar.com</p>
    <p class="info">telephone - 100 00 00 001, 100 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();




