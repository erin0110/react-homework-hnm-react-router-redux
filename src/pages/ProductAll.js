import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCrad/ProductCrad";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query] = useSearchParams();
  const dispatch = useDispatch();

  let searchQuery = query.get("q") || "";
  const getProducts = () => {
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container>
      <Row>
        {productList.length > 0 ? (
          productList.map((menu, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={menu} />
            </Col>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              textAlign: "center",
            }}
          >
            {searchQuery}에 대한 검색 결과가 없습니다.
          </div>
        )}
      </Row>
    </Container>
  );
};

export default ProductAll;
