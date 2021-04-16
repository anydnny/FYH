var text,material,blotter,elem,scope;elem=window.innerWidth<720?(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:40,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:70,paddingRight:70,paddingTop:40,paddingBottom:40}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".m-acid-title")):(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:80,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".acid-title")),(scope=blotter.forText(text)).appendTo(elem);
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })