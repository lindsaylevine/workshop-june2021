import React from 'react';
import { Grid, Box, Heading, Image } from 'theme-ui';
import Link from 'next/link';

function ProductCatalog({ products }) {
  return (
    <Grid columns={[1, 2, 4]}>
      {products.map((p) => {
        const { product, description } = p;
        const { image_url, sku, title } = product;
        return (
          <Link key={sku} href={`/product/${sku}`}>
            <a>
              <Heading as='h2'>{title}</Heading>
              <Image src={image_url} />
              <Box as='p'>{description || ''}</Box>
            </a>
          </Link>
        );
      })}
    </Grid>
  );
}

export default ProductCatalog;
