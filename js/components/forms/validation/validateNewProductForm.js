import { validateURL, validatePrice, checkLength } from "./regexValidations.js";
import { addNewProduct } from "../../../pages/add.js";

export default function validateNewProductForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const nameError = document.querySelector("#product-name-error");
    const image = document.querySelector("#image");
    const imageError = document.querySelector("#product-image-error");
    const description = document.querySelector("#description");
    const descriptionError = document.querySelector("#product-description-error");
    const price = document.querySelector("#price");
    const priceError = document.querySelector("#product-price-error");
    const featured = document.querySelector(".featured-checkbox");

    const nameValue = name.value.trim();
    const imageValue = image.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = price.value.trim();
    const featuredValue = featured.checked;

    var formIsValid = true;

    if (checkLength(name.value, 3) === true) {
        nameError.style.display = "none";
        name.style.borderColor = "#698678";
    } else {
        nameError.style.display = "block";
        name.style.borderColor = "#ac6b63";
        formIsValid = false;
    }

    if (validateURL(image.value) === true) {
        imageError.style.display = "none";
        image.style.borderColor = "#698678";
    } else {
        imageError.style.display = "block";
        image.style.borderColor = "#ac6b63";
        formIsValid = false;
    }

    if (checkLength(description.value, 19) === true) {
        descriptionError.style.display = "none";
        description.style.borderColor = "#698678";
    } else {
        descriptionError.style.display = "block";
        description.style.borderColor = "#ac6b63";
        formIsValid = false;
    }

    if (validatePrice(price.value)) {
        priceError.style.display = "none";
        price.style.borderColor = "#698678";
    } else {
        priceError.style.display = "block";
        price.style.borderColor = "#ac6b63";
        formIsValid = false;
    }

    if (formIsValid === true) {
        addNewProduct(nameValue, imageValue, descriptionValue, priceValue, featuredValue);
    }

}
