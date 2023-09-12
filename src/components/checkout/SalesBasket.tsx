// In some other React component file
import SalesBasketItem from "./SalesBasketItem";

const SalesBasket: React.FC = () => {
  return (
    <SalesBasketItem
      itemName="Laptop"
      originalPrice={1200}
      discountedPrice={1000}
      imageUrl="./src/assets/img/4.jpg"
    />
  );
};

export default SalesBasket;
