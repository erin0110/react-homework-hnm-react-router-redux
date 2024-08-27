import { useNavigate } from "react-router-dom";
import "./ProductCrad.css";

const ProductCrad = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = (e) => {
    e.preventDefault();
    navigate(`/product/${item.id}`);
  };

  return (
    <a href="#n" className="prd-card" onClick={(e) => showDetail(e)}>
      <img src={item?.img} alt="" />
      <em>{item?.choice ? "Conscious choice" : ""}</em>
      <span>{item?.title}</span>
      <strong>₩{item?.price}</strong>
      <i>{item?.new && "신제품"}</i>
    </a>
  );
};

export default ProductCrad;
