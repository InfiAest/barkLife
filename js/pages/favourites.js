import stickyNav from "../utils/stickyNav.js";
import createNavBar from "../components/menu/createMenu.js";
import renderFavouriteProducts from "../components/renderHtml/renderFavourites.js";

createNavBar();

//Sticky nav
window.onscroll = function() {stickyNav()};

renderFavouriteProducts();



