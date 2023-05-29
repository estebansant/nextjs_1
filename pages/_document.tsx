import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-red-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
