$(document).ready(function() {
    $('.animated').waypoint(function() {
        $(this.element).addClass('fadeInUp');
    }, {
        offset: '80%'
    });

    $('h2.animated').waypoint(function() {
        $(this.element).addClass('fadeInDown');
    }, {
        offset: '80%'
    });
});
window.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector(".slide-in");
  
    // Function to add the "show" class to the paragraph after a delay
    function showParagraph() {
      paragraph.classList.add("show");
    }
  
    // Delay the slide-in effect by 1 second (adjust as needed)
    setTimeout(showParagraph, 1000);
  });
  
