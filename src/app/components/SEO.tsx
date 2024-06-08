import React from "react"
import { Helmet } from "react-helmet-async"

interface SEOProps {
    title: string;
    description: string;
    type?: string;
    ogImage?: string;
    ogImageAlt?: string;
    twitterCard?: string;
  }

const SEO = (props: SEOProps) => {
    const {title, description, type = 'website', ogImage, ogImageAlt, twitterCard } = props;
    const currentUrl = window.location.href;

    return (
    <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta property="og:type" content={type}/>
        <meta property="og:title" content={title}/>
        <meta property="og:url" content={currentUrl} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
        {twitterCard && <meta property="twitter:card" content={twitterCard} />}
    </Helmet>
  )
}

export default SEO;