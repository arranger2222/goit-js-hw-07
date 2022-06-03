import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

let instanceLightBox;

refs.gallery.innerHTML = createGalleryMarkup();

refs.gallery.addEventListener('click', onImageClick);


function onImageClick(e) {
  e.preventDefault();

  const image = e.target;
  if(image.nodeName !== 'IMG'){
    return
};

const lightboxImage = createImageLightbox(image);
instanceLightBox = basicLightbox.create(lightboxImage,
  {
    onShow: (instance) => {
        document.addEventListener('keydown', pressESC);
    },
    onClose: (instance) => {
        document.removeEventListener('keydown', pressESC)
    },
}
  );
  instanceLightBox.show();
}

function createGalleryMarkup() {
return galleryItems.map((image) => `
<div class="gallery__item">
  <a class="gallery__link image" href="${image.original}">
    <img
      class="gallery__image "
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>
`).join('')
};

function createImageLightbox(image) {
  return `<img src="${image.dataset["source"]}">`;
}

function pressESC(e) {
  if (e.code !== 'Escape') {
      return;
  }
  instanceLightBox.close();
}
