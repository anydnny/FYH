var text,material,blotter,elem,scope;elem=window.innerWidth<720?(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:40,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:70,paddingRight:70,paddingTop:40,paddingBottom:40}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".m-acid-title")):(text=new Blotter.Text("ACID HOUSE",{family:"'Arial', sans-serif",size:80,weight:"bold",fill:"rgba(255, 76, 199, 1)",paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20}),(material=new Blotter.LiquidDistortMaterial).uniforms.uSpeed.value=.3,material.uniforms.uSeed.value=20,material.uniforms.uVolatility.value=.25,blotter=new Blotter(material,{texts:text}),document.querySelector(".acid-title")),(scope=blotter.forText(text)).appendTo(elem);



  


