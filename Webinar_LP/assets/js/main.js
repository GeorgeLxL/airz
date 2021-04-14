function faqClick(faqFocus) {
	var focused = document.getElementsByClassName("faq-wrap");
    var i;
    for (i = 0; i < focused.length; i++) {
	    var under = focused[i];
	    if (under.classList.contains('faq-wrap') && under!=faqFocus) {
            under.classList.remove('faq-wrap');
	    }
    }
    if (faqFocus.classList.contains('faq-wrap')) {
        faqFocus.classList.remove('faq-wrap');
    }
    else {
        faqFocus.classList.add('faq-wrap');
    }
}
window.onclick = function(event) {	
	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var menu_btn = document.getElementsByClassName("menu_btn");
    var i;
    for (i = 0; i < menu_btn.length; i++) {
      var openDropdown = menu_btn[i];
      if (openDropdown.classList.contains('change')) {
        openDropdown.classList.remove('change');
      }
    }
    var faq_wrap = document.getElementsByClassName("faq-wrap");
    var i;
    for (i = 0; i < faq_wrap.length; i++) {
      var openDropdown = faq_wrap[i];
      if (openDropdown.classList.contains('faq-wrap')) {
        openDropdown.classList.remove('faq-wrap');
      }
    }
}

var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var topBtn = document.getElementById("topBtn");
  var header = document.getElementById("top");
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    topBtn.classList.add("showBtn");
    header.classList.add("header-shadow");
  } else {
    if(topBtn.classList.contains("showBtn")){
    topBtn.classList.remove("showBtn");
    header.classList.remove("header-shadow");
  }
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var scroll_top=75;
      if (window.innerWidth > 1200) {
        scroll_top=75
      } else if (window.innerWidth > 1000) {
        scroll_top = 66;
      } else {
        scroll_top = 64;
      }
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      if (window.innnerwidth > 768) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - scroll_top
        }, 2500, function(){
          
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } else {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - scroll_top
        }, 3500, function(){
          
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
      
    } // End if
  });
});