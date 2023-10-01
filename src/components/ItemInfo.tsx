// ItemInfo.tsx
import "./CSS/ItemInfo.css"; // Adjust this path to match your folder structure

interface ItemInfoProps {
  name: string;
  discountedPrice: number;
  retailPrice: number;
}

const ItemInfo: React.FC<ItemInfoProps> = ({
  name,
  discountedPrice,
  retailPrice,
}) => {
  return (
    <div className="item-info">
      <h2>{name}</h2>
      <div className="price-info">
        <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
        <span className="retail-price">${retailPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemInfo;
