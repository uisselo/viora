import classNames from "classnames";

type Props = {
  imageUrl: string;
  imageAltText: string;
  imageClassName?: string;
};

function ImageComponent(props: Props) {
  const { imageUrl, imageAltText, imageClassName } = props;

  return (
    <div
      className={classNames(
        "relative w-full bg-white border-[1.5px] border-gray-300 aspect-square",
        imageClassName,
      )}
    >
      <img className="absolute inset-0" src={imageUrl} alt={imageAltText} />
    </div>
  );
}

export default ImageComponent;
