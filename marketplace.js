 /*let a = [66, 12, 4, 55, 9, 845, 374];

  for (let i = 0; i < a.length; i++) {
  	
//сортировка пузырьком
  	for (let j = 1; j < a.length; j++){
  		if (a[i] > a[j]) {
  			let temp = a[i];
  			a[i] = a[j];
  			a[j] = temp;
  		}
  		console.log(a);
  	}
  }

    let nav = document.querySelector('#nav');
    console.log(nav);
    replacedNode = parentNode.replacedChild(newChild, oldChild);
    replacedNode = nav.replacedChild(nav.children[1], nav.children[0]);
    console.log(replacedNode);
    nav.appendChild(replacedNode);*/

   
   document.querySelector('button#sort-asc').onclick = function () {
       sortList('data-price');
     }
     document.querySelector('button#sort-desc').onclick = function () {
        sortListDesc('data-price');
     }
   document.querySelector('button#sort-rating').onclick = function () {
    sortListDesc('data-rating');
}


    function sortList(sortType) {
    let items = document.querySelector('.goods-wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.goods-wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

 var modal = document.getElementById('myModal');
 var btn = document.getElementById('myBtn');
 var span = document.getElementsByClassName('close')[0];

 btn.onclick = function () {
  modal.style.display = "block";
 }

 span.onclick = function () {
 modal.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }

  var modal2 = document.getElementById('myModal2');
 var btn2 = document.getElementById('myBtn2');
 var span2 = document.getElementsByClassName('close2')[0];

 btn2.onclick = function () {
  modal2.style.display = "block";
 }

 span.onclick = function () {
 modal2.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal2){
      modal2.style.display = "none";
    }
  }


  var modal3 = document.getElementById('myModal3');
 var btn3 = document.getElementById('myBtn3');
 var span3 = document.getElementsByClassName('close3')[0];

 btn3.onclick = function () {
  modal3.style.display = "block";
 }

 span3.onclick = function () {
 modal3.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal3){
      modal3.style.display = "none";
    }
  }

  var modal4 = document.getElementById('myModal4');
 var btn4 = document.getElementById('myBtn4');
 var span4 = document.getElementsByClassName('close4')[0];

 btn4.onclick = function () {
  modal4.style.display = "block";
 }

 span4.onclick = function () {
 modal4.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal4){
      modal4.style.display = "none";
    }
  }

  var modal5 = document.getElementById('myModal5');
 var btn5 = document.getElementById('myBtn5');
 var span5 = document.getElementsByClassName('close5')[0];

 btn5.onclick = function () {
  modal5.style.display = "block";
 }

 span5.onclick = function () {
 modal5.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal5){
      modal5.style.display = "none";
    }
  }


  var modal6 = document.getElementById('myModal6');
 var btn6 = document.getElementById('myBtn6');
 var span6 = document.getElementsByClassName('close6')[0];

 btn6.onclick = function () {
  modal6.style.display = "block";
 }

 span6.onclick = function () {
 modal6.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal6){
      modal6.style.display = "none";
    }
  }


  var modal7 = document.getElementById('myModal7');
 var btn7 = document.getElementById('myBtn7');
 var span7 = document.getElementsByClassName('close7')[0];

 btn7.onclick = function () {
  modal7.style.display = "block";
 }

 span7.onclick = function () {
 modal.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal7){
      modal7.style.display = "none";
    }
  }


  var modal8 = document.getElementById('myModal8');
 var btn8 = document.getElementById('myBtn8');
 var span8 = document.getElementsByClassName('close8')[0];

 btn8.onclick = function () {
  modal8.style.display = "block";
 }

 span8.onclick = function () {
 modal8.style.display = "none";
}

  window.onclick = function(event){
    if(event.target == modal8){
      modal8.style.display = "none";
    }
  }