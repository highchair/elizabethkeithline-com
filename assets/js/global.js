// Missing forEach on NodeList for IE11
// SCRIPT438: Object does not support property or method forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Check for mouse clicks, enter keypress (13), or spacebar keypress (32)
// https://karlgroves.com/2014/11/24/ridiculously-easy-trick-for-keyboard-accessibility
function a11yClick(event){
  if(event.type === 'click') {
    return true;
  } else if(event.type === 'keypress') {
    var code = event.charCode || event.keyCode;
    if((code === 32) || (code === 13)) {
      return true;
    }
  } else {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Make it clear whether JS has loaded or not
  document.body.classList.remove("no-js");
  document.body.classList.add("js");
  
  // Expand / Collapse utility
  //
  //Minimum expected markup:
  //<div>
  //  <div>
  //    <button id="summaryId" class="js__expand-collapse" aria-expanded="false" aria-controls="targetId">See More</button>
  //  </div>
  //  <div id="targetId" aria-labelledby="summaryId" class="aria-expand">Content to reveal here</div>
  //</div>
  //
  // This function ONLY toggles a show/hide class on the target and toggles aria-expanded
  // Any other functionality (like swapping the text content if true/false) needs to be in the component JS
  document.querySelectorAll(".js__expand-collapse").forEach(function(toggle_element) {
    toggle_element.addEventListener('click', function(event) {
      event.preventDefault();
      if (a11yClick(event) === true) {
        var expanded = toggle_element.getAttribute('aria-expanded');
        var target_id = toggle_element.getAttribute('aria-controls');
        var target_element = document.getElementById(target_id);
  
        if (expanded == 'true') {
          toggle_element.setAttribute('aria-expanded', 'false');
          target_element.classList.remove('js__aria-expanded')
        } else {
          toggle_element.setAttribute('aria-expanded', 'true');
          target_element.classList.add('js__aria-expanded')
        }
      }
    })
  });
});