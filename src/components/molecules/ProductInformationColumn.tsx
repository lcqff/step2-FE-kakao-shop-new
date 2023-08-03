import { ProductInfoData } from '@api/dto';
import Photo from '@components/atoms/Photo';
import React from 'react';

interface ProductInformationColumnProps {
  product: ProductInfoData;
  setIsLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductInformationColumn = ({ product, setIsLoaded }: ProductInformationColumnProps) => {
  const { productName } = product;
  return (
    <div className="w-[500px]">
      <Photo
        src={`${process.env.PUBLIC_URL}/productImages/${product.id}.jpg`}
        alt={productName}
        setImgLoaded={setIsLoaded}
      />
    </div>
  );
};

export default ProductInformationColumn;
