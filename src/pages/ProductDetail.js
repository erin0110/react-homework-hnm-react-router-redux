import { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = useCallback(async () => {
    let url = `https://my-json-server.typicode.com/erin0110/react-homework-hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }, [id]);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  return (
    <Container className="prd-detail-container">
      <Row>
        <Col xs={12} md={6}>
          <img src={product?.img} alt="" />
        </Col>
        <Col xs={12} md={6}>
          <div className="info">
            <h3>{product?.title}</h3>
            <strong>₩{product?.price}</strong>
            <span>{product?.choice && "Conscious choice"}</span>
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="btn" size="lg">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
