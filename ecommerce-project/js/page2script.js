const attributesPart = document.querySelector(".attributes-part");
const tagContainer = document.querySelector(".tag-container");
const clearFilter = document.querySelector(".clear-filter");

// Toggle dropdown collapse
attributesPart.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (button) {
    const attributesBox = button.closest(".attributes");
    if (attributesBox) {
      attributesBox.classList.toggle("collapsed");
    }
  }
});

// Add tag for clicking options like in Category (attribute 1)
document.querySelectorAll("#attribute-first .options-parent").forEach((optionsParent) => {
  optionsParent.addEventListener("click", (e) => {
    const option = e.target.closest(".options");
    if (option) {
      addTag(option.textContent.trim());
    }
  });
});

// For all other attributes except #4 (Price range),
// listen for checkbox changes to add/remove tags
document.querySelectorAll(".attributes").forEach((attr) => {
  const attrId = attr.id;
  if (attrId !== "1" && attrId !== "4") {
    const checkboxes = attr.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          addTag(checkbox.value);
        } else {
          removeTag(checkbox.value);
        }
      });
    });
  }
});

// Create and append a tag box
function addTag(text) {
  // Check if tag already exists - avoid duplicates
  if ([...tagContainer.children].some(tag => tag.textContent.trim() === text)) return;

  const tagBox = document.createElement("div");
  tagBox.classList.add("tag-box");
  tagBox.innerHTML = `<p>${text}</p><i class="ri-close-line"></i>`;
  tagContainer.appendChild(tagBox);

  // Remove tag on close icon click
  const closeIcon = tagBox.querySelector("i");
  closeIcon.addEventListener("click", () => {
    tagBox.remove();
    // If tag corresponds to a checkbox, uncheck it
    uncheckCheckbox(text);
  });
}

// Remove a tag by its text content
function removeTag(text) {
  const tags = tagContainer.querySelectorAll(".tag-box");
  tags.forEach(tag => {
    if (tag.textContent.trim() === text) {
      tag.remove();
    }
  });
  // Also uncheck checkbox if any
  uncheckCheckbox(text);
}

// Uncheck the checkbox for the given tag text value
function uncheckCheckbox(text) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach((checkbox) => {
    if (checkbox.value === text) {
      checkbox.checked = false;
    }
  });
}

// Clear all tags and uncheck all checkboxes on clear filter
clearFilter.addEventListener("click", () => {
  tagContainer.innerHTML = "";
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});

// array for products
const products = [
  {
    name: "Canon Cmera EOS 2000, Black 10x zoom",
    price: "$998.00",
    originalPrice: "$1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: "assets/image/tech/1.jpg"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    image: "assets/image/tech/3.jpg"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    image: "assets/image/tech/2.jpg"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    image: "assets/image/tech/6.jpg"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    originalPrice: "$1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    image: "assets/image/tech/8.jpg"
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    image: "assets/image/tech/9.jpg"
  }
];
const container = document.querySelector(".products-parent");
const gridBtn = document.querySelector('.grid-btn');
 const listBtn = document.querySelector('.list-btn');

const styleList = () => {
  gridBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
listBtn.style.backgroundColor = 'rgba(239, 242, 244, 1)';
  gridParent.style.visibility = "hidden";
  renderListProducts(); // call it to render the boxes
}


function renderListProducts() {


  products.forEach(product => {
    const productBox = document.createElement("div");
    productBox.classList.add('product-box');

    productBox.innerHTML += `
  <div class="product-card">
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h4>${product.name}</h4>
      
      <p>
        ${product.price}
        ${product.originalPrice ? `<del style="color:grey; font-size: 0.8em;">${product.originalPrice}</del>` : ""}
      </p>
      
      <p style="display: flex; align-items: center; gap: 1px;">
        <span style="color: orange;font-size:1.4vw;">★★★★☆</span> 
        <span style="color: #f19e1b;font-size:1.2vw;margin-left:2%;margin-right:1%">${product.rating}</span> 
        <span style="color: #999;margin-right:2%;font-size:1.1vw"> • ${product.orders} orders</span> 
        <span style="color: rgba(0, 181, 23, 1); font-weight: 500;font-size:1vw">• ${product.shipping}</span>
      </p>
      
      <p style="color: #555;font-size:1vw;color:rgba(80, 80, 80, 1);font-weight:400">${product.description}</p>
      <a href="#" style="color: #007bff; text-decoration: none;font-size:0.9vw">View details</a>
    </div>
    <div class="love-sign">
      <i class="ri-heart-line"></i>
    </div>
  </div>
`;
    container.appendChild(productBox);
  });
}

renderListProducts();


const gridProducts = [
  {

    image: "assets/image/tech/1.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/4.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 5.9,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/3.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/2.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/6.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/4.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/7.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",

  },
  {

    image: "assets/image/tech/8.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "assets/image/tech/1.jpg",
    price: "$99.50",
    originalPrice: "$1128.00",
    rating: 7.5,
    stars: "★★★★☆",
    description: "GoPro HERO6 4K Action Camera - Black",
  }
];
 
const styleGrid = () => {
gridBtn.style.backgroundColor = 'rgba(239, 242, 244, 1)';
listBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  gridParent.style.visibility = "visible";
  container.innerHTML = ''; // Removes all .product-box inside
  renderGridProducts(); // call it to render the boxes
}



const gridParent = document.querySelector(".grid-parent");

function renderGridProducts() {
  container.innerHTML = ''; // Removes all .product-box inside
  gridParent.innerHTML = "";
  gridParent.style.visibility = "visible";

  gridProducts.forEach(product => {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");

    gridBox.innerHTML = `
      <div class="grid-card">
        <img class="grid-image" src="${product.image}" alt="${product.name}" />
        <div class="grid-info">
       
        
       
        <p class="grid-price">
  ${product.price} <del>${product.originalPrice}</del>
  <i class="ri-heart-line" style="display: inline-block;margin-left: 5rem;color: rgba(13, 110, 253, 1);border: 1px solid rgba(222, 226, 231, 1);padding: 4px;border-radius: 20%;vertical-align: middle;"></i>
</p>
          <p class="grid-stars">
            <span class="grid-rating-stars">${product.stars}</span>
            <span class="grid-rating-value">${product.rating}</span>
          </p>
          <p class="grid-description">${product.description}</p>
        </div>
      </div>
    `;

    gridParent.appendChild(gridBox);
  });
}



