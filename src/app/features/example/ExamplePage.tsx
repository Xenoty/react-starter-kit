import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../../components/SEO";
import seoData from './seo.json'; 

const ExamplePage = () => {
    return (
    <>  
        <SEO {...seoData} />
        <Container>
            <h1>This is an Example Page</h1>
        </Container>
    </>
    );
}

export default ExamplePage;