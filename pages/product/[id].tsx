import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next';

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch('https://nextjs-1-beige.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  const pathsMap = data.map((avo) => ({
    params: {
      id: avo.id,
    }
  }))

  return{
    paths: pathsMap,
    // incremental static generation
    // 404 for any other page that is not inside the paths of the ids
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`https://nextjs-1-beige.vercel.app/api/avo/${id}`);
  const data: TProduct = await response.json();

  return {
    props: {
      product: data,
    },
  }
}

const ProductPage = ({product}: {product: TProduct}) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
