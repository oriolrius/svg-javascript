var svg = function() {
  return  document.getElementById('sinoptic').contentDocument;
}

var myText = function(data) {
  var t = svg().getElementById('myText').firstElementChild;
  t.innerHTML = "Hello World";
}

var mySquare = function(data) {
  var ms = svg().getElementById('mySquare');
  
  ms.onclick = function(e) {
    var style_value = '';
    // parsing style attribute values
    var attrs = ms.getAttribute('style').split(' ').join('').split(';');
    for (var i in attrs) {
      var attr = attrs[i].split(':');
      if (attr.length > 1) {
        var k = attr[0];
        var v = attr[1];
      }
      if (k == 'fill') {
        // toggle color red vs green
        v = v == 'rgb(0,128,0)' ? '#E91E63' : 'rgb(0,128,0)';
      }
      if (k != "")  style_value = style_value + k + ':' + v + ';';
    }

    ms.setAttribute('style',style_value);
    var t = svg().getElementById('myText');
    var state = t.getAttribute('display');
    // toggle the display attribute value
    state = state == 'none' ? 'block' : 'none';
    // set new display sate
    t.setAttribute('display',state);
  };
  ms.onmouseover = function(e) {
    ms.style.cursor = 'pointer';
  };
  ms.onmouseout = function(e) {
    ms.style.cursor = 'auto';
  };
}

var main = function() {
  myText();
  mySquare();
}
