// this is the code for the section-main menu items e.g automobiles,outdoor etc.this code helps in better visualistaion

const categories = document.querySelectorAll(".categories"); //select all the categories elements
categories.forEach(elem => {        //looping on every category
    elem.addEventListener("click",()=>{    //adds functionality onclick
        categories.forEach(cat =>{
            cat.style.backgroundColor = '';
            cat.querySelector('p').style.fontWeight = '';
        })
        elem.style.backgroundColor = 'rgba(229, 241, 255, 1)';
            elem.querySelector('p').style.fontWeight = '500';
         
    })
});

// below is the code for te section of home and outdoor items 
// this secction basically adds products dynamically using dom manipulation
const homeAndOutdoorItems = [
  {
    title: "Soft chairs",
    from: "From",
    price:"USD 19",
    image: "assets/image/interior/1.jpg"
  },
  {
    title: "Sofa & chair",
    from: "From",
    price:"USD 19",
    image: "assets/image/interior/6.jpg"
  },
  {
    title: "Kitchen dishes",
    from: "From",
    price:"USD 19",
    image: "assets/image/interior/5.jpg"
  },
  {
    title: "Smart watches",
    from: "From",
    price:"USD 19",
    image: "assets/image/interior/3.jpg"
  },
  {
    title: "Kitchen mixer",
    from: "From",
    price:"USD 10",
    image: "assets/image/interior/9.jpg"
  },
  {
    title: "Blenders",
    from: "From",
    price:"USD 39",
    image: "assets/image/interior/8.jpg"
  },
  {
    title: "Home appliance",
    from: "From",
    price:"USD 19",
    image: "assets/image/interior/7.jpg"
  },
  {
    title: "Coffee maker",
    from: "From",
    price:"USD 10",
    image: "assets/image/interior/4.jpg"
  }
];

const homeAndOutdoorDiv = document.querySelector(".right-section");

homeAndOutdoorItems.forEach(item => {
  const homeAndOutdoorBoxes = document.createElement('div');
  homeAndOutdoorBoxes.classList.add("products-home-outdoor");
  homeAndOutdoorBoxes.innerHTML = `
    <div class="content">
      <h4>${item.title}</h4>
      <p>${item.from} <br/> ${item.price}</p>
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  homeAndOutdoorDiv.appendChild(homeAndOutdoorBoxes);
});
// this section is ofr electronic item
const electronicItemParent = document.querySelector(".right-electronic");

const ElectronicItems = [
  {
    title: "Smart watches",
    from: "From",
    price:"USD 19",
    image: "assets/image/8.jpg"
  },
  {
    title: "Cameras",
    from: "From",
    price:"USD 89",
    image: "assets/image/6.jpg"
  },
  {
    title: "Headphones",
    from: "From",
    price:"USD 10",
    image: "assets/image/9.jpg"
  },
  {
    title: "Smart watches",
    from: "From",
    price:"USD 90",
    image: "assets/image/10.jpg"
  },
  {
    title: "Gaming set",
    from: "From",
    price:"USD 35",
    image: "assets/image/5.jpg"
  },
  {
    title: "Laptops & PC",
    from: "From",
    price:"USD 340",
    image: "assets/image/7.jpg"
  },
  {
    title: "Smartphones",
    from: "From",
    price:"USD 19",
    image: "assets/image/2.jpg"
  },
  {
    title: "Electric kattle",
    from: "From",
    price:"USD 240",
    image: "assets/image/1.jpg"
  }
];
ElectronicItems.forEach(item => {
   const electronicItemDiv = document.createElement("div");
   electronicItemDiv.classList.add("products-home-outdoor");
  electronicItemDiv.innerHTML = `
    <div class="content">
      <h4>${item.title}</h4>
      <p>${item.from} <br/> ${item.price}</p>
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  electronicItemParent.appendChild(electronicItemDiv);
});

// this section is for the product that are below the inquiry section
const recommendedProductsParent = document.querySelector(".products-box-recommended")
const recommendedProducts = [
  {
    image: "assets/image/cloth/1.jpg",
    price: "$10.30",
    description: "T-shirts with multiple colors, for men"
  },
  {
    image: "assets/image/cloth/3.jpg",
    price: '$10.30',
    description: "Jeans shorts for men blue color"
  },
  {
    image: "assets/image/cloth/7.jpg",
    price: '$12.50',
    description: "Brown winter coat medium size"
  },
  {
    image: "assets/image/cloth/6.jpg",
    price: '$34.00',
    description: "Jeans bag for travel for men"
  },
  {
    image: "assets/image/cloth/5.jpg",
    price: '$99.00',
    description: "Leather wallet"
  },
  {
    image: "assets/image/cloth/4.jpg",
    price: '$9.99',
    description: "Canon camera black, 100x zoom"
  },
  {
    image: "assets/image/tech/9.jpg",
    price: '$8.99',
    description: "Headset for gaming with mic"
  },
  {
    image: "assets/image/cloth/5.jpg",
    price: '$10.30',
    description: "Smartwatch silver color modern"
  },
  {
    image: "assets/image/interior/3.jpg",
    price: '$10.30',
    description: "Blue wallet for men leather metarial"
  },
  {
    image: "assets/image/tech/10.jpg",
    price: '$80.95',
    description: "Jeans bag for travel for men"
  }
];
recommendedProducts.forEach(items => {
  const recommendedProductsBox = document.createElement('div');
  recommendedProductsBox.classList.add("recommended-products-box");

  recommendedProductsBox.innerHTML = `
    <div class="content">
    <img src="${items.image}" alt="${items.name}" />
    <p>${items.price}</p>
      <h4>${items.description}</h4>
    </div>
  `;
  recommendedProductsParent.appendChild(recommendedProductsBox)
});
// this section ends here
const countries = [
  { country: "Arabic Emirates", url: "shopname.ae", image: "assets/image/flags/dubai.png" },
  { country: "Australia", url: "shopname.ae", image: "assets/image/flags/australia.png" },
  { country: "United States", url: "shopname.ae", image: "assets/image/flags/usa.png" },
  { country: "Russia", url: "shopname.ru", image: "assets/image/flags/russia.png" },
  { country: "Italy", url: "shopname.it", image: "assets/image/flags/italy.png" },
  { country: "Denmark", url: "denmark.com.dk", image: "assets/image/flags/scotland.png" },
  { country: "France", url: "shopname.com.fr", image: "assets/image/flags/france.png" },
  { country: "Arabic Emirates", url: "shopname.ae", image: "assets/image/flags/dubai.png" }, // duplicate
  { country: "China", url: "shopname.ae", image: "assets/image/flags/china.png" },
  { country: "Great Britain", url: "shopname.co.uk", image: "assets/image/flags/england.png" }
];
//this is the array for the suppliers of diffeent countries i added it dynamically to update in future if needed
const countryParent = document.querySelector(".countries-area");

countries.forEach(items => {
  const countriesBox = document.createElement('div');
  countriesBox.classList.add("countries-box");

  countriesBox.innerHTML = `
    <div class="countries-box-content">
      <img src="${items.image}" alt="${items.country}" class="countries-box-img" />
      <div class="countries-box-text">
        <h4>${items.country}</h4>
        <p>${items.url}</p>
      </div>
    </div>
  `;
  countryParent.appendChild(countriesBox);
});
