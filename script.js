
// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Hover Sync (if needed for syncing overlays and flags)
// Uncomment below if you implement hover-sync feature

/*
const overlayImages = document.querySelectorAll('.overlay-image');
const flagButtons = document.querySelectorAll('.flag-button');

function setHoverListeners(groupA, groupB) {
  groupA.forEach(item => {
    const country = item.dataset.country;
    const pair = [...groupA, ...groupB].filter(el => el.dataset.country === country);

    item.addEventListener('mouseenter', () => {
      pair.forEach(el => el.classList.add('hover-sync'));
    });

    item.addEventListener('mouseleave', () => {
      pair.forEach(el => el.classList.remove('hover-sync'));
    });
  });
}

setHoverListeners(overlayImages, flagButtons);
setHoverListeners(flagButtons, overlayImages);
*/
