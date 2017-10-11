// GO!

// TASK 1 -- Show/Hide Nav
document.querySelector('#hide-nav button').addEventListener('click', function() {
  document.querySelector('#hide-nav .nav-menu').classList.toggle('nav-menu-hidden');
})

// TASK 2 -- Select an Icon
var selector = document.querySelectorAll('#select-items .wish-list .option');
for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(evt) {
    evt.currentTarget.classList.toggle('selected');
  })
}

// TASK 3 -- Move Item From List to List
var selector = document.querySelectorAll('#add-vals button');
for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(evt) {
    var increment = parseInt(evt.currentTarget.textContent);
    var current = parseInt(document.querySelector('#add-vals .total-points').textContent);
    document.querySelector('#add-vals .total-points').textContent = current + increment;
  })
}

// TASK 4 -- Add Guest to List
var selector = document.querySelectorAll('#list-2-list li');
for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(evt) {
    var list = evt.currentTarget;
    var destiny = 'good-standing-list';
    if (list.parentNode.className === 'good-standing-list') {
      destiny = 'probation-list';
    }
    document.querySelector('ul.' + destiny).appendChild(list);
  })
}


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var selector = document.querySelectorAll('#change-colors .palette span');
for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function(evt) {
    var color = evt.currentTarget.className;
    document.querySelector('#change-colors .msg').className = 'msg ' + color;
  })
}
