var text = new Blotter.Text("ACID HOUSE", {
    family : "'Arial', sans-serif",
    size : 40,
    weight: 'bold',
    fill: 'rgba(255, 76, 199, 1)',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 40,
    paddingBottom: 40,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = 0.3;
  material.uniforms.uSeed.value = 20;
  material.uniforms.uVolatility.value = 0.25;
  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.querySelector(".m-acid-title");
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);