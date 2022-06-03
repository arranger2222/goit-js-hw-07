import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup();

const createdGallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionType: 'attr',
    overlay: true,
    captionsData: 'alt',
});

function createGalleryMarkup(){
    return galleryItems.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`)
        .join('')
};

console.log(galleryItems);
