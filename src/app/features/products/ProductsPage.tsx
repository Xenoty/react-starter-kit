import React, { useCallback, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Product } from '../../../domain/entities/Product';
import { getAllProducts } from '../../../data/api/endpoints/product.endpoint';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import './ProductsPage.scss';
import SEO from '../../components/headers/Seo';
import seoData from './seo.json'; // Import the SEO data

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1); // Track the current page
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const initialProductsFetched = useRef(false); // Ref to track initial fetch

  const filteredProducts = products?.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const fetchProducts = useCallback(async () => {
    setTimeout(async () => {
      try {
        const productsResponse = await getAllProducts({
          limit: 10,
          skip: (page - 1) * 10, // Calculate skip based on the page
        });
        setProducts((prevProducts) => [
          ...prevProducts,
          ...productsResponse.products,
        ]);
        setHasMore(productsResponse.products.length > 0);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        if (!initialProductsFetched.current) {
          initialProductsFetched.current = true;
        }
      }
    }, 2500);
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchData = () => {
    if (!searchTerm && hasMore) {
      setPage((prevPage) => prevPage + 1); // Load next page
    }
  };

  const Products = () => {
    if (initialProductsFetched.current === false) {
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
        {filteredProducts.map((product, index) => (
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

  return (
    <Container className="justify-content-center">
      <SEO {...seoData} />
      <Form.Control
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setHasMore(!e.target.value && initialProductsFetched.current); // Update hasMore if search is cleared
        }}
        className="mb-3" // Add some margin-bottom
      />

      <InfiniteScroll
        dataLength={filteredProducts.length}
        next={fetchData}
        hasMore={hasMore}
        style={{ overflowX: 'hidden' }}
        loader={
          <Row xs={2} sm={2} md={3} lg={4} className="g-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Skeleton height={20} />
                  <Skeleton height={150} />
                  <Card.Body>
                    <Skeleton count={4} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        } // Skeleton while loading
        endMessage={
          <p style={{ textAlign: 'center' }}>Yay! You have seen it all</p>
        }
      >
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          <Products />
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default ProductsPage;
