import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Product } from '../../../domain/entities/Product';
import { getAllProducts } from '../../../data/api/endpoints/product.endpoint';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ProductsPage.scss';

const ProductsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = useCallback(async () => {
    setTimeout(async () => {
      setIsLoading(true);
      try {
        const productsResponse = await getAllProducts({ limit: 10 });
        setProducts(productsResponse.products);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }, 2500);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const Products = () => {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: 12 }).map((_, index) => (
            <Col key={index}>
              <Card>
                <Skeleton height={20} /> {/* Header skeleton */}
                <Skeleton height={150} /> {/* Image skeleton */}
                <Card.Body>
                  <Skeleton count={4} /> {/* Title and description skeletons */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      );
    }

    return (
      <>
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
      </>
    );
  };

  console.log(isLoading);

  return (
    <Container className="justify-content-center">
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        <Products />
      </Row>
    </Container>
  );
};

export default ProductsPage;
