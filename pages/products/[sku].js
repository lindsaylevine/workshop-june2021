import React from 'react';
import Head from 'next/head';
import Product from '../../components/product';
import { RichText } from 'prismic-reactjs';

import { queryRepeatableDocuments } from '../../queries';

import Layout from '../../components/layout';

import { Client } from '../../prismic';

const ProductPage = ({ product }) => {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const products = await queryRepeatableDocuments(
    (docs) => docs.type === 'products'
  );

  return {
    paths: products[0].data.productcatalog.map((prod) => {
      return `/products/${prod.product.sku}`;
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const products = await queryRepeatableDocuments(
    (docs) => docs.type === 'products'
  );

  const selectedProduct = products[0].data.productcatalog.find((prod) => {
    return prod.product.sku === parseInt(params.sku);
  });

  return {
    props: {
      product: { ...selectedProduct.product, ...selectedProduct, price: 10000 },
    },
  };
}

export default ProductPage;
