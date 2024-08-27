import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCrad/ProductCrad";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();
  let searchQuery = query.get("q") || "";

  const getProducts = useCallback(async () => {
    let url = `https://my-json-server.typicode.com/erin0110/react-homework-hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }, [searchQuery]);

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
