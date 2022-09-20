// Sticky Section On scroll 
// let mainNavLinks = document.querySelectorAll(".expertContainer ul li a");
// let mainSections = document.querySelectorAll(".expertContentCard");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
// let fromTop = window.scrollY ;

// mainNavLinks.forEach(link => {
//     let card = document.querySelector(link.hash);

//     if (
//     card.offsetTop <= fromTop &&
//     card.offsetTop + card.offsetHeight > fromTop
//     ) {
//     link.classList.add("active");
//     } else {
//     link.classList.remove("active");
//     }
// });
// });


// Sticky Section On scroll 
window.addEventListener('scroll', () => {
    function designDiscovery(){
        document.getElementById('designDiscover').classList.add('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function productDesignFn(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.add('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function prototypeIdea(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.add('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function revampProduct(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.add('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function uxAuditing(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.add('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function codeFn(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.add('active');
        document.getElementById('staffAugmentation').classList.remove('active');
    }

    function staffAugmentationFn(){
        document.getElementById('designDiscover').classList.remove('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('proto').classList.remove('active');
        document.getElementById('rev').classList.remove('active');
        document.getElementById('ux').classList.remove('active');
        document.getElementById('co').classList.remove('active');
        document.getElementById('staffAugmentation').classList.add('active');
    }



    let banner = document.getElementsByClassName("banner")[0].offsetHeight;
    let design = document.getElementById("design").clientHeight;
    let productDesign = document.getElementById("productDesign").clientHeight;
    let prototype = document.getElementById("prototype").clientHeight;
    let revamp = document.getElementById("revamp").clientHeight;
    let uxAudit = document.getElementById("uxAudit").clientHeight;
    let code = document.getElementById("code").clientHeight;

    if(window.pageYOffset >= banner){
        designDiscovery()
    }

    if(window.pageYOffset >= banner+design){
        productDesignFn()
    }

    if(window.pageYOffset >= banner+design+productDesign){
        prototypeIdea()
    }

    if(window.pageYOffset >= banner+design+productDesign+prototype){
        revampProduct()
    }
    if(window.pageYOffset >= banner+design+productDesign+prototype+revamp){
        uxAuditing()
    }
    if(window.pageYOffset >= banner+design+productDesign+prototype+revamp+uxAudit){
        codeFn()
    }
    if(window.pageYOffset >= banner+design+productDesign+prototype+revamp+uxAudit+code){
        staffAugmentationFn()
    }

})


// Sticky section mobile accordion
let accordion = document.querySelectorAll(".accordion")

accordion.forEach((e)=>{
    e.addEventListener("click", ()=>{
        removeClass()
        e.classList.toggle("current");
    })
})

function removeClass(){
    accordion.forEach((e)=>{
        e.classList.remove("current")
    })
}