const Image = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt || "My Alt"}
      width={width || "80"}
      height={height || "100"}
    />
  );
};

export default Image;
