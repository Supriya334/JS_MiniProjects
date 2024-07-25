let products = {
    data: [
        { productName: "Regular White T-Shirt", category: "TopWear", price: "30", image: "https://tse3.mm.bing.net/th?id=OIP.z61hI1q16JjtMpU9xivD1QHaJT&pid=Api&P=0&h=220" },
        { productName: "Regular White T-Shirt", category: "TopWear", price: "30", image: "http://personnalisation-teeshirt.com/wp-content/uploads/2013/11/classique-tee-shirt.jpg" },
        { productName: "Regular White T-Shirt", category: "TopWear", price: "30", image: "https://tse2.mm.bing.net/th?id=OIP.TaQZWhJHjJL6v8FbZLY5HwHaJ4&pid=Api&P=0&h=220" },
        { productName: "Regular White T-Shirt", category: "TopWear", price: "30", image: "https://tse3.mm.bing.net/th?id=OIP.CVY2TKNM1QFrCluCl6km-gHaLH&pid=Api&P=0&h=220" },
        { productName: "Black Hoodie", category: "TopWear", price: "50", image: "https://i.etsystatic.com/22987009/r/il/8d8db2/2596189189/il_794xN.2596189189_iovc.jpg" },
        { productName: "Blue Jeans", category: "BottomWear", price: "40", image: "https://images-na.ssl-images-amazon.com/images/I/71xB8Uw0s7L._AC_UL1500_.jpg" },
        { productName: "Cargo Pants", category: "BottomWear", price: "45", image: "https://blog.lifestylestores.com/wp-content/uploads/2021/07/VAN-HEUSEN-Solid-Pleated-Trousers.png" },
        { productName: "Leather Jacket", category: "Jacket", price: "120", image: "https://tse3.mm.bing.net/th?id=OIP.np4d-xEZAhOA9XdJqHQsnAAAAA&pid=Api&P=0&h=220" },
        { productName: "Denim Jacket", category: "Jacket", price: "85", image: "https://tse4.mm.bing.net/th?id=OIP.R6SClb34xod22VZUV8CCdAHaJ4&pid=Api&P=0&h=220" },
        { productName: "Digital Watch", category: "Watch", price: "100", image: "http://cdn2.jomashop.com/media/catalog/product/c/i/citizen-blue-angels-skyhawk-a-t-eco-drive-stainless-steel-men_s-watch-jy0040-59l.jpg" },
        { productName: "Analog Watch", category: "Watch", price: "80", image: "https://cdn.shopify.com/s/files/1/1140/1866/products/FEB0099_b_UK_W10S_LC.jpg?v=1571438916" },
        { productName: "Striped Shirt", category: "TopWear", price: "35", image: "https://papercrush.net/wp-content/uploads/2022/10/5-Different-ways-to-style-your-casual-bottom-wear-3.jpg" },
        { productName: "Grey Sweatpants", category: "BottomWear", price: "55", image: "https://i.pinimg.com/originals/d8/ba/3f/d8ba3f78f5df2e934f5e86ab0f55c4f4.jpg" },
        { productName: "Brown Leather Belt", category: "BottomWear", price: "25", image: "https://cdn.shopify.com/s/files/1/0302/1304/6410/products/0827204822_490x@2x.progressive.jpg?v=1599832609" },
        { productName: "Bomber Jacket", category: "Jacket", price: "90", image: "https://tse4.mm.bing.net/th?id=OIP.6O2WL-rDmdESyAcoyJkXRgHaHa&pid=Api&P=0&h=220" },
        { productName: "Sports Watch", category: "Watch", price: "70", image: "https://cdna.lystit.com/photos/toddsnyder/0c686963/timex-OLIVE-The-Military-Watch-40mm.jpeg" },
        { productName: "Checked Shirt", category: "TopWear", price: "45", image: "https://www.sociomix.com/images/diaries/2/1613036544-923.jpg" },
        { productName: "Graphic Tee", category: "TopWear", price: "20", image: "https://tse1.mm.bing.net/th?id=OIP.qAxyIc5d8kXp1jpW07CteQHaLH&pid=Api&P=0&h=220" },
        { productName: "Khaki Trousers", category: "BottomWear", price: "50", image: "https://tse1.mm.bing.net/th?id=OIP.qAxyIc5d8kXp1jpW07CteQHaLH&pid=Api&P=0&h=220" }
        // Add more products here as needed
    ]
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category.toLowerCase());

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let name = document.createElement("h5");
    name.innerText = i.productName;
    card.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = `$${i.price}`;
    card.appendChild(price);

    document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active")
        }
    }
    else {
            button.classList.remove("active")
        })
}

window.onload = () => {
    filterProduct("all")
}