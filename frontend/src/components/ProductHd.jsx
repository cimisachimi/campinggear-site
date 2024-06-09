import { TbArrowRight } from "react-icons/tb";

const ProductHeader = (props) => {
  const { product } = props;

  return (
    <div>
      Home Shop {product.category} {product.name}
    </div>
  );
};

export default ProductHeader;
