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
