document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const brandFilter = document.getElementById("brandFilter");
    const productGrid = document.getElementById("productGrid");
    const products = document.querySelectorAll(".product-card");

    // Search Functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        products.forEach((product) => {
            const title = product.querySelector(".card-title").textContent.toLowerCase();
            product.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });

    // Brand Filter Functionality
    brandFilter.addEventListener("change", () => {
        const selectedBrand = brandFilter.value;
        products.forEach((product) => {
            const brand = product.getAttribute("data-brand");
            product.style.display =
                selectedBrand === "all" || brand === selectedBrand ? "block" : "none";
        });
    });
});
