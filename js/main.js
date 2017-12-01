(function () {

  var carpics = document.querySelectorAll('.data-ref'),
      carname = document.querySelector('.modelName'),
      carprice = document.querySelector('.priceInfo'),
      carinfo = document.querySelector('.modelDetails'),
      appliedClass;

      const httpRequest = new XMLHttpRequest();

  function changeElements() {
    // set up the AJAX => handle errors first
    if (!httpRequest) {
      alert('giving up, your brower sucks');
      return false;
    }

    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/function.php?carModel=' + this.id);
    httpRequest.send();
  }


  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }



  function processResult(data) {
    //let carIndex = carData[this.id];

    const { modelName, pricing, modelDetails } = data;
    let carname = document.querySelector('.modelName').textContent = modelName;
    let carprice = document.querySelector('.priceInfo').innerHTML = pricing;
    let carinfo = document.querySelector('.modelDetails').textContent = modelDetails;

    //carname.firstChild.nodeValue = carIndex.car;
    //carprice.firstChild.nodeValue = carIndex.price;
    //carinfo.innerHTML = carIndex.text;

    carpics.forEach(function(element, index) {
      element.classList.add('nonActive');
    })

    //this.classList.remove('nonActive');

    appliedClass = this.id;
  }

  carpics.forEach(function(element, index) {
    element.addEventListener('click', changeElements, false);
  });

})();
