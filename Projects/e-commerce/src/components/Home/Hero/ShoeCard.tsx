interface ShoeCardProps {
  imgUrl: {
    thumbnail: any;
    bigShoe: any;
  };
  changeBigSheImage: (url: string) => void;
  bigShoeImage: string;
}


export const ShoeCard = ({ imgUrl, changeBigSheImage, bigShoeImage }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigSheImage(imgUrl.bigShoe)
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  )
}