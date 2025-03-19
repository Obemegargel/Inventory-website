document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
})

const products = [
    // 400's
    {name:"401-007", perBox: 50, stock: 15, location: "400's/PVC"},
    {name:"401-010", perBox: 50, stock: 15, location: "400's/PVC"},
    {name:"401-012", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"401-015", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"401-020", perBox: 25, stock: 15, location: "400's/PVC"},

    {name:"401-025", perBox: 10, stock: 15, location: "400's/PVC"},
    {name:"401-030", perBox: 10, stock: 15, location: "400's/PVC"},
    {name:"401-040", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"401-131", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"401-168", perBox: 25, stock: 15, location: "400's/PVC"},

    {name:"402-007", perBox: 50, stock: 15, location: "400's/PVC"},
    {name:"402-010", perBox: 50, stock: 15, location: "400's/PVC"},
    {name:"402-012", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"402-015", perBox: 25, stock: 15, location: "400's/PVC"},
    {name:"402-030", perBox: 10, stock: 15, location: "400's/PVC"},

    // 800's
    {name:"801-007", perBox: 50, stock: 15, location: "800's/Grey"},
    {name:"801-010", perBox: 50, stock: 15, location: "800's/Grey"},
    {name:"801-012", perBox: 25, stock: 15, location: "800's/Grey"},
    {name:"801-015", perBox: 25, stock: 15, location: "800's/Grey"},
    {name:"801-020", perBox: 25, stock: 15, location: "800's/Grey"},

    // Drip System
    {name:"1800 Retro", perBox: 50, stock: 2, location: "Drip System"},
    {name:"PCZ-101-40", perBox: 50, stock: 16, location: "Drip System"},
    
    // Paint
    {name:"801-007", perBox: 50, stock: 15, location: "Paint"},

    // 900's - 1200's
    {name:'NDS-1243 4"x3"', perBox: 4, stock: 4, location: "900's - 1200's"},

    // 1800's
    {name:"801-010", perBox: 25, stock: 0, location: "1800's"},
    {name:"801-020", perBox: 10, stock: 5, location: "1800's"},

    // Sprinkler Devices
    {name:"RA-6504 FC", perBox: 50, stock: 0, location: "Sprinkler Devices"},
    {name:"RA-6504 PC", perBox: 50, stock: 0, location: "Sprinkler Devices"},

    // Brass
    {name:'2"x24" nipple', perBox: 50, stock: 2, location: "Brass"},
];

// Function to display products from the products list
// OG function, this will get deleted once I upload this to Github so I have this to reference to see how far I am come.
// function loadProducts() {
//     const container = document.getElementById("inventory-container");
//     container.innerHTML = ""; //clear previous entries

//     products.forEach(product =>{
//         const productBar = document.createElement("div");
//         productBar.classList.add("product_bar");
    
//         productBar.innerHTML = `
//         <div class="product_name">${product.name}</div>
//         <div class="product_box">Per Box: ${product.perBox}</div>
//         <div class="product_stock">Stock: ${product.stock}</div>
//         `;
    
//         container.appendChild(productBar);
    
//     });
// }


function loadProducts(locationFilter = null, searchTerm = ""){
    const container = document.getElementById("inventory-container");
    container.innerHTML=""; //clears previous entries

    // change to lowercase for searchbar
    searchTerm = searchTerm.toLowerCase();

    // Filter products based on the selected location (if applicable)
    const filteredProducts = products.filter(product => {
        matchesLocation = locationFilter ? product.location === locationFilter : true;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.stock.toString().includes(searchTerm);
        return matchesLocation && matchesSearch;
    });
        
    // display filtered products
    filteredProducts.forEach(product => {
        const productBar = document.createElement("div");
        productBar.classList.add("product_bar");

        productBar.innerHTML = `
            <div class="product_name">${product.name}</div>
            <div class="product_box">Per Box: ${product.perBox}</div>
            <div class="product_stock">Stock: ${product.stock}</div>
        `;

        container.appendChild(productBar);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", function (){
        loadProducts(null, searchBox.value);
    })
    loadProducts(); //load all products initially
});

document.getElementById("all-btn").addEventListener("click", () => loadProducts(null));
document.getElementById("400-btn").addEventListener("click", () => loadProducts("400's/PVC"));
document.getElementById("800-btn").addEventListener("click", () => loadProducts("800's/Grey"));
document.getElementById("dripstm-btn").addEventListener("click", () => loadProducts("Drip System"));
document.getElementById("paint-btn").addEventListener("click", () => loadProducts("Paint"));
document.getElementById("9001200-btn").addEventListener("click", () => loadProducts("900's - 1200's"));
document.getElementById("1800-btn").addEventListener("click", () => loadProducts("1800's"));
document.getElementById("sprnklrdvc-btn").addEventListener("click", () => loadProducts("Sprinkler Devices"));
document.getElementById("brass-btn").addEventListener("click", () => loadProducts("Brass"));

