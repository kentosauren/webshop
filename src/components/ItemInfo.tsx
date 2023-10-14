// ItemInfo.tsx
import "./CSS/ItemInfo.css"; // Adjust this path to match your folder structure

interface ItemInfoProps {
  name: string;
  discountedPrice?: number; // Note the optional
  retailPrice?: number; // Note the optional
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
        <span className="discounted-price">
          {discountedPrice ? discountedPrice.toFixed(2) : "Loading..."} kr
        </span>
        <span className="retail-price">
          {retailPrice ? retailPrice.toFixed(2) : "Loading..."} kr
        </span>
      </div>
    </div>
  );
};

export default ItemInfo;
