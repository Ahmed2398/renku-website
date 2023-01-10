// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// toggle collapse of specified content
function toggleContent(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

// collapse all open content
function collapseAllOpenContent() {
  const colls = document.getElementsByClassName('collapsible');
  for (const coll of colls) {
    if (coll.classList.contains('active')) {
      coll.classList.remove('active');
      toggleContent(coll.nextElementSibling);
    }
  }
}

const colls = document.getElementsByClassName('collapsible');
for (const coll of colls) {
  coll.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      collapseAllOpenContent();
    }
    this.classList.toggle('active');
    toggleContent(this.nextElementSibling);
  });
}