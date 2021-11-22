import { EMPTY_RESULTS } from "../settings/messages.js";
import displayMessage from "./displayMessage.js";

//Render featured product cards

export function renderFeaturedProducts(products) {
    
    const featuredContainer = document.querySelector(".featured-grid");
    featuredContainer.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        const product = products[i];

        if (products[i].featured === true) {
            featuredContainer.innerHTML += `<div class="product-card">
                                            <a href="#" class="product-card-link">
                                                <div class="product-img-container">
                                                    <div class="card-img" style="background-image: url('${product.image.url}');">
                                                </div>
                                                <div class="product-name-container">
                                                    <h3>${product.name}</h3>
                                                    <p>£${product.price}</p>
                                                </div>
                                            </a>
                                            <div class="cta-button-container">
                                                <a href="#" class="cta-button"><span>View product</span></a>
                                            </div>
                                        </div>`;
        }

    }
};

//Render all product cards

export function renderAllProducts(productsToRender) {
    
    const productContainer = document.querySelector(".product-grid");
    productContainer.innerHTML = "";

    if (productsToRender.length === 0) {
        displayMessage("", EMPTY_RESULTS, ".product-grid");
    }

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product-card">
                                            <a href="#" class="product-card-link">
                                                <div class="product-img-container">
                                                    <div class="card-img" style="background-image: url('${product.image.url}');">
                                                </div>
                                                <div class="product-name-container">
                                                    <h3>${product.name}</h3>
                                                    <p>£${product.price}</p>
                                                </div>
                                            </a>
                                            <div class="cta-button-container">
                                                <a href="#" class="cta-button"><span>View product</span></a>
                                            </div>
                                        </div>`
    });

};