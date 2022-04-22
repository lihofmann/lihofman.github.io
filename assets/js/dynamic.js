
this.onload = function() {buttonsWhereNeeded()};
window.onresize = function() {buttonsWhereNeeded()};

// scroll progess indicator

window.onscroll = function() {showProgress()};

// scroll spy showing section

   function showProgress() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
   }

// toggle section view with button
   function toggleView(sectionName) {
      var linkName = sectionName.concat("-link");
      var linkText = document.getElementById(linkName).textContent.toUpperCase();

      var textDiv = sectionName.concat("-text");
      var gradientDiv = sectionName.concat("-grad");
      var btnName = sectionName.concat("-btn");

      if (linkText == "SHOW MORE...") {
         linkText = "Show less";
         document.getElementById(textDiv).setAttribute('style', 'position: relative');
         document.getElementById(gradientDiv).setAttribute('style', 'display: none');
         document.getElementById(btnName).setAttribute('style', 'position: relative');
      }
      else {
         linkText = "Show more...";
         document.getElementById(textDiv).setAttribute('style', 'position: absolute');
         document.getElementById(gradientDiv).setAttribute('style', 'display: block');
         document.getElementById(btnName).setAttribute('style', 'position: absolute');
      }
      document.getElementById(linkName).textContent = linkText;
   }

// display button depending on overflow in parent container
   function buttonsWhereNeeded() {
      var buttons = document.getElementsByClassName("toggle-view");
      for (var i = 0; i < buttons.length; ++i) {
          var item = buttons[i];
          if (!isOverflown(item.parentElement) && item.firstElementChild.textContent == "Show more...") {
            // for divs that do not overflow in non-extended mode
            item.style.display = "none";
            item.previousElementSibling.style.display = "none";
          }
          else {
            item.style.display = "block";
            item.previousElementSibling.style.display = "block";
          }
      }
   }

// check if vertical overflow
   function isOverflown(element) {
     return element.scrollHeight > element.clientHeight;
   }

   