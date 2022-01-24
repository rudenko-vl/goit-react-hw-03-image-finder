
function ImageGalleryItem({ image, onClick, toogleModal }) {
    return (
        <li onClick={() => {
        onClick(image.largeImageURL);
        toogleModal();
        }}>
            <img src={image.webformatURL} alt="" />

        </li>
    )
};

export default ImageGalleryItem;