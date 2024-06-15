import React, { useCallback, useEffect, useState } from 'react';
import { Product } from '../../../domain/entities/Product';
import { getAllProducts } from '../../../data/api/endpoints/product.endpoint';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ProductsPage.scss';

const ProductsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const productsResponse = await getAllProducts({ limit: 10 });
      setProducts(productsResponse.products);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(isLoading);

  return (
    <Container className="justify-content-center d-flex">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products?.map((product, index) => (
          <Col key={index}>
            <Card>
              <Card.Header as="h5">{product.price}</Card.Header>
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
