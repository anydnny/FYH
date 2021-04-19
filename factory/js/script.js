var text,material,blotter,elem,scope;elem=window.innerWidth<720?(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:40,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:70,paddingRight:70,paddingTop:40,paddingBottom:40}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".m-acid-title")):(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:80,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".acid-title")),(scope=blotter.forText(text)).appendTo(elem);
function findVideos(){let e=document.querySelectorAll(".video");for(let t=0;t<e.length;t++)setupVideo(e[t])}function setupVideo(e){let t=e.querySelector(".video__link"),r=e.querySelector(".video__media"),i=e.querySelector(".video__button"),o=parseMediaURL(r);e.addEventListener("click",()=>{let r=createIframe(o);t.remove(),i.remove(),e.appendChild(r)}),t.removeAttribute("href"),e.classList.add("video--enabled")}function parseMediaURL(e){return e.src.match(/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i)[1]}function createIframe(e){let t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",generateURL(e)),t.classList.add("video__media"),t}function generateURL(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}findVideos();
const logo = document.querySelector('.fyh-logo');
if(window.innerWidth <700){
window.onscroll=() => {
    if(scrollY >= 387){
        logo.style.display = 'block'}
    else{
        logo.style.display = 'none'
    }
}
} else { window.onscroll=() => {
    if(scrollY >= 600){
        logo.style.display = 'block'}
    else{
        logo.style.display = 'none'
    }
}}

