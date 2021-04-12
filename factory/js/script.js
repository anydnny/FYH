var text = new Blotter.Text("ACID HOUSE", {
    family : "'Arial', sans-serif",
    size : 80,
    weight: 'bold',
    fill: 'rgba(255, 76, 199, 1)',
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 20,
    paddingBottom: 20,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = 0.3;
  material.uniforms.uSeed.value = 20;
  material.uniforms.uVolatility.value = 0.25;
  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(".acid-title");
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);


  


