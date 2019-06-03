var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

wow = new WOW ({
  mobile: false
}
);

wow.init();

var modal = document.querySelector("#call-modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#modal-close"),
    openButton = document.querySelector("#open-modal");
    openButtonFooter = document.querySelector("#open-modal-footer");

closeButton.addEventListener("click", function(){
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});

openButton.addEventListener("click", function(){
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});

openButtonFooter.addEventListener("click", function(){
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});
