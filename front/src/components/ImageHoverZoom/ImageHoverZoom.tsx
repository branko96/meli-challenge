import "./styles.scss"

interface ImageHoverZoomProps {
  imagePath: string
}

const ImageHoverZoom = ({ imagePath }: ImageHoverZoomProps) => {
  return (
    <div className="img-wrapper">
      <img
        src={imagePath}
        alt=""
        className="hover-zoom"
      />
    </div>
  );
};
export default ImageHoverZoom;
