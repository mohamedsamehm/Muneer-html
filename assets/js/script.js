/**
 * WOW
 */
new WOW().init();

if (document.querySelector(".slide-partners")) {
  let swiper = new Swiper(".slide-partners", {
    slidesPerView: 1.5,
    spaceBetween: 24,

    loop: true,
    autoplay: {
      delay: 50,
      disableOnInteraction: false,
    },
    speed: 2000,
    autoplayDisableOnInteraction: false,
    centeredSlides: true,
    allowTouchMove: false,

    breakpoints: {
      576: {
        slidesPerView: 2.8,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 3.1,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3.8,
        spaceBetween: 50,
      },

      1400: {
        slidesPerView: 5.8,
        spaceBetween: 50,
      },
    },
  });
}

if (document.querySelector(".slide-partners2")) {
  let swiper = new Swiper(".slide-partners2", {
    slidesPerView: 1.5,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 50,
      disableOnInteraction: false,
    },
    speed: 2000,
    autoplayDisableOnInteraction: false,
    allowTouchMove: false,

    breakpoints: {
      576: {
        slidesPerView: 2.8,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3.1,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3.8,
        spaceBetween: 50,
      },

      1400: {
        slidesPerView: 5.8,
        spaceBetween: 50,
      },
    },
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hamburger-toggle")) {
    e.target.children[0].classList.toggle("active");
    $("html").toggleClass("menu-opened");
  }
});

window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  var header = document.querySelector("header");
  if (scroll >= 60) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

let go_to_top = document.querySelector(".go-to-top");
if (go_to_top) {
  go_to_top.addEventListener("click", function (event) {
    event.preventDefault();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}

(function ($) {
  /**
   * Add new domain
   *
   */
  const addNewDomainBtn = document.getElementById("add-new-domain");
  addNewDomainBtn.addEventListener("click", function () {
    let clone = document.querySelector(".add-domain-row").cloneNode(true);
    clone.querySelector(".form-control").value = "";
    addNewDomainBtn.before(clone);
  });

  let trashBtnsDomainBtn = document.querySelectorAll(
    ".add-domain-row .btn-trash"
  );
  for (let index = 0; index < trashBtnsDomainBtn.length; index++) {
    const element = trashBtnsDomainBtn[index];
    element.addEventListener("click", function () {
      element.closest(".add-domain-row").remove();
    });
  }

  /**
   * Add voice command
   *
   */
  const addVoiceCommandBtn = document.getElementById("add-voice-command");
  addVoiceCommandBtn.addEventListener("click", function () {
    let clone = document
      .querySelector(".add-voice-command-row")
      .cloneNode(true);
    clone.querySelector(".form-control").value = "";
    addVoiceCommandBtn.parentElement.before(clone);
  });

  let trashBtnsVoiceCommand = document.querySelectorAll(
    ".add-voice-command-row .btn-trash"
  );
  for (let index = 0; index < trashBtnsVoiceCommand.length; index++) {
    const element = trashBtnsVoiceCommand[index];
    element.addEventListener("click", function () {
      element.closest(".add-voice-command-row").remove();
    });
  }
  /**
   * Slider Scroll
   */
  // Get all sections that have an ID defined
  const sidebarNav = document.querySelectorAll(".sidebar-nav");
  const sidebarNavLinks = document.querySelectorAll(".sidebar-nav .nav-link");
  let sections = [];
  for (let index = 0; index < sidebarNavLinks.length; index++) {
    const element = sidebarNavLinks[index];
    sections.push(
      document.getElementById(element.getAttribute("href").slice(1))
    );
  }

  // Add an event listener listening for scroll
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 250;
      sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".sidebar-nav a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".sidebar-nav a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }

  $(".list-news .item").click(function (e) {
    e.preventDefault();
    let src = $(this).data("src");
    let title = $(this).find("p").text();
    let date = $(this).find(".date").find("span").text();

    $(".main-new  .text .date span").text(date);

    $(".main-new  .text p").text(title);
    $(".main-new .image img ").attr("src", src);
  });

  /************ */

  $('[name="dark-mode"]').change(function (e) {
    e.preventDefault();
    $("html").toggleClass("invert-active");
  });

  $('[name="font-size"]').change(function (e) {
    e.preventDefault();
    let val = $(this).val();
    let size = $(this).data("size");
    $("html").removeClass("small").removeClass("default").removeClass("big");
    $("html").addClass(size);
    $("html").css("font-size", val + "px");
  });

  function is_touch_device() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }

  $(document).ready(function () {
    if ($('[data-fancybox ^="ima"]').length > 0) {
      let images_ar = [];
      $("[data-fancybox]").each(function (index, element) {
        let date = $(this).attr("data-fancybox");
        images_ar.push(date);
      });

      images_ar = [...new Set(images_ar)];
      images_ar.forEach((element) => {
        $('[data-fancybox="' + element + '"]').fancybox({
          buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close",
          ],
          caption: function (instance, item) {
            var figcaption = $(this).find(".caption");
            if (figcaption.length) {
              return $(this).find(".caption").html();
            } else {
              return $(this).data("caption");
            }
          },
        });
      });

      $(document).on("click", ".fancybox-close", function () {
        $.fancybox.close();
      });
    }
  });

  /*-------------------------------------------------------------------------------
	  price tab js
	-------------------------------------------------------------------------------*/
  function tab_hover() {
    var tab = $(".price_tab");
    if ($(window).width() > 450) {
      if ($(tab).length > 0) {
        tab.append('<li class="hover_bg"></li>');
        if ($(".price_tab li a").hasClass("active_hover")) {
          var pLeft = $(".price_tab li a.active_hover").position().left,
            pWidth = $(".price_tab li a.active_hover").css("width");
          $(".hover_bg").css({
            left: pLeft,
            width: pWidth,
          });
        }
        $(".price_tab li a").on("click", function () {
          $(".price_tab li a").removeClass("active_hover");
          $(this).addClass("active_hover");
          var pLeft = $(".price_tab li a.active_hover").position().left,
            pWidth = $(".price_tab li a.active_hover").css("width");
          $(".hover_bg").css({
            left: pLeft,
            width: pWidth,
          });
        });
      }
    }
  }
  tab_hover();
})(jQuery);
