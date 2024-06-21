import Image, { StaticImageData } from "next/image";
import { SetStateAction } from "react";

interface ShoeCardProps {
  imgUrl: {
    thumbnail: any;
    bigShoe: any;
  };
  changeBigSheImage: (url: SetStateAction<StaticImageData>) => void;
  bigShoeImage: StaticImageData;
}

export const ShoeCard = ({ imgUrl, changeBigSheImage, bigShoeImage }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigSheImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 h-[160px] w-[160px] rounded-xl ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
    >
      <Image src={imgUrl.thumbnail} alt="thumbnail" className="h-full w-full object-cover rounded-xl" />
    </div>
  );
}