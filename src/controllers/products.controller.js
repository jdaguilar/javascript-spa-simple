import views from '../views/products.html'
import modal from '../views/partials/modal.html'


const getProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
    return await response.json();
}

export default async () => {
    // Import products view
    const divElement = document.createElement("div");
    divElement.innerHTML = views;

    // Select productList container
    const productsElement = divElement.querySelector('#productsList');
    const products = await getProducts();

    products.forEach(product => {
        productsElement.innerHTML += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img 
                      class="img-fluid img-thumbnail" 
                      src="${product.thumbnailUrl}"
                      onclick="imageModal(this)"
                    />
                </div>
            </div>
        `
    });

    // Import modal
    divElement.innerHTML += modal;

    return divElement;
}
