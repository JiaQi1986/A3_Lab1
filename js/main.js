(function () {
  var carpics = document.querySelectorAll('.data-ref'),
      carname = document.querySelector('.modelName'),
      carprice = document.querySelector('.priceInfo'),
      carinfo = document.querySelector('.modelDetails'),
      appliedClass;

  function changeElements() {
    let carIndex = carData[this.id];

    carname.firstChild.nodeValue = carIndex.car;
    carprice.firstChild.nodeValue = carIndex.price;
    carinfo.innerHTML = carIndex.text;

    carpics.forEach(function(element, index) {
      element.classList.add('nonActive');
    })

    this.classList.remove('nonActive');

    appliedClass = this.id;
  }

  carpics.forEach(function(element, index) {
    element.addEventListener('click', changeElements, false);
  });

})();
