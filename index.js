var offerBar = document.querySelector(".top-bar")
document.getElementById("top-close").addEventListener("click",
    function () {
        offerBar.style.display="none"
    }
)



var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",
    function(){
        slidermargin=slidermargin+100
    
        if(slidermargin>200)
        {
            slidermargin=0
            sliderimage.style.marginLeft=0;
        }
        else{
            sliderimage.style.marginLeft="-"+slidermargin+"vw";
        }
    }
)

sliderleftbutton.addEventListener("click",

     function(){
        
        if(slidermargin==0)
        {   
            slidermargin=200
            sliderimage.style.marginLeft="-"+slidermargin+"vw";
        }
        else{
            slidermargin=slidermargin-100
            sliderimage.style.marginLeft="-"+slidermargin+"vw";
        }  
    }
)  


var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="./image/redheart.png"
        }
        else{
            e.target.src="./image/blackheart.png"
        }
    })
})