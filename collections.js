var offerBar = document.querySelector(".top-bar")

document.getElementById("top-close").addEventListener("click",
function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
   
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


document.addEventListener('DOMContentLoaded', function() {


  var filterCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
  var products = document.querySelectorAll('.product');
  var searchInput = document.querySelector('.navbar-search input[type="search"]');



  function filterProducts() {
    var selectedOccasionTags = Array.prototype.slice.call(filterCheckboxes)
      .filter(function(checkbox) {
        return checkbox.name === 'tags' && (checkbox.value === 'summer' || checkbox.value === 'party' || checkbox.value === 'beach');
      })
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });



    var selectedColorTags = Array.prototype.slice.call(filterCheckboxes)
      .filter(function(checkbox) {
        return checkbox.name === 'tags' && (checkbox.value === 'red' || checkbox.value === 'blue' || checkbox.value === 'white' || checkbox.value === 'green');
      })
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });




    var selectedArrivalTags = Array.prototype.slice.call(filterCheckboxes)
      .filter(function(checkbox) {
        return checkbox.name === 'tags' && (checkbox.value === 'new' || checkbox.value === 'old');
      })
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });



    var query = searchInput.value.toLowerCase();
     Array.prototype.forEach.call(products, function(product) {
      var productTags = product.getAttribute('data-tags').split(' ');
      var productName = product.querySelector('h1').textContent.toLowerCase();



      var matchesOccasion = selectedOccasionTags.length === 0 || selectedOccasionTags.some(function(tag) {
        return productTags.includes(tag);
      });


      var matchesColor = selectedColorTags.length === 0 || selectedColorTags.some(function(tag) {
        return productTags.includes(tag);
      });


      var matchesArrival = selectedArrivalTags.length === 0 || selectedArrivalTags.some(function(tag) {
        return productTags.includes(tag);
      });

      
      var matchesSearch = productName.includes(query);

      var isVisible = matchesOccasion && matchesColor && matchesArrival && matchesSearch;
      product.style.display = isVisible ? 'block' : 'none';
    });
  }

  Array.prototype.forEach.call(filterCheckboxes, function(checkbox) {
    checkbox.addEventListener('change', filterProducts);
  });

  searchInput.addEventListener('input', filterProducts);

  filterProducts();
});