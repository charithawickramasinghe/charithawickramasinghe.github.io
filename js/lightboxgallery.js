// Album data
const albums = {
	album1: ["img/galleries-portraits-rose/img1.jpg", "img/galleries-portraits-rose/img2.jpg", "img/galleries-portraits-rose/img3.jpg"],
	album2: ["album2_1.jpg", "album2_2.jpg", "album2_3.jpg"],
	album3: ["album3_1.jpg", "album3_2.jpg", "album3_3.jpg"],
  };

  let currentAlbum = [];
  let currentIndex = 0;

  // Open lightbox and display the first image in the album
  $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
	event.preventDefault();
	const albumKey = $(this).data('album');
	currentAlbum = albums[albumKey];
	currentIndex = 0;
	showLightboxImage();
	$('#lightbox').removeClass('lightboxgallery-hidden');
  });

  // Close lightbox
  $(document).on('click', '.lightboxgallery-close, #lightbox', function(event) {
	event.preventDefault();
	$('#lightbox').addClass('lightboxgallery-hidden');
  });

  // Prevent closing when clicking inside the modal
  $(document).on('click', '.lightboxgallery-modal', function(event) {
	event.stopPropagation();
  });

  // Navigate to the next image
  $(document).on('click', '.lightboxgallery-next', function(event) {
	event.preventDefault();
	currentIndex = (currentIndex + 1) % currentAlbum.length;
	showLightboxImage();
  });

  // Navigate to the previous image
  $(document).on('click', '.lightboxgallery-prev', function(event) {
	event.preventDefault();
	currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
	showLightboxImage();
  });

  // Show the current image in the lightbox
  function showLightboxImage() {
	$('#lightbox-img').attr('src', currentAlbum[currentIndex]);
  }