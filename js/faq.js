// Get all elements with the class "faq" and store them in the "acc" variable
var acc = document.getElementsByClassName("faq");

// Loop through each element in "acc"
for (var i = 0; i < acc.length; i++) {
  
  // Add an event listener to the current element that listens for a "click" event
  acc[i].addEventListener("click", function() {
    
    // Toggle the "active" class on the clicked element
    this.classList.toggle("active");
    
    // Get the next element sibling of the clicked element and store it in the "panel" variable
    var panel = this.nextElementSibling;
    
    // If the "max-height" style property is set on the "panel" element, set it to null (i.e., remove the property)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      
    // Otherwise, set the "max-height" property to the full height of the "panel" element (so that it expands to show all of its contents)
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    
  });
  
}