import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import ProductCatalog from '../../components/product-catalog';

import { queryRepeatableDocuments } from '../../queries';

export async function getStaticProps() {
  const products = await queryRepeatableDocuments(
    (doc) => doc.type === 'products'
  );
  return {
    props: {
      products: products[0].data.productcatalog,
    },
  };
}

function Products({ products }) {
  return (
    <Layout>
      <ProductCatalog products={products} />
    </Layout>
  );
}

export default Products;
