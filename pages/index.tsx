import React from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const [productList, setProductList] = React.useState<TProduct[]>([])

  const {
    query: { id },
  } = useRouter()

  React.useEffect(() => {
    if (id) {
      window
        .fetch('/api/avo/${id}')
        .then((response) => response.json())
        .then(({ data, length }) => {
          setProductList(data)
        })
    }
  }, [id])

  return (
    <div>
      <h1>Coding on Next.js!</h1>
      {productList.map((product, i) => {
        return <h3 key={i}>{product?.name}</h3>
      })}
    </div>
  )
}

export default HomePage
