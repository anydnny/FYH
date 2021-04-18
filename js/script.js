var text,material,blotter,elem,scope;elem=window.innerWidth<720?(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:40,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:70,paddingRight:70,paddingTop:40,paddingBottom:40}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".m-acid-title")):(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:80,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".acid-title")),(scope=blotter.forText(text)).appendTo(elem);
function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();