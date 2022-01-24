import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
function ImageGallery({ arrayImages, onClick, toogleModal }) {
    return (
        <ul>
            {arrayImages.map((image) => {
                return (
                    <ImageGalleryItem onClick={onClick} toogleModal={toogleModal} key={image.id} image={image}></ImageGalleryItem>
                )
            })};
        </ul>
    );
    
};

export default ImageGallery;