import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Counter } from '../components/Counter'

const Home: NextPage<{initialCount: number}> = ({initialCount}) => {
  // [getter, setter] = useState(initialState)
  const [count, setCount] = useState(initialCount)

  // useEffectの処理はレンダリング後に実行される
  useEffect(() => {
    // コンポーネントマウント時
  }, [])

  useEffect(() => {
    // コンポーネンレンダリング時 かつ count変更時
  }, [count])

  useEffect(() => {
    // コンポーネンレンダリング時
  })

  return (
    <div>
      <Head>
        <title></title>
        <meta name={""} content={""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter count={count} setCount={c => setCount(c)} />
    </div>
  )
}

// サーバーでAPIをフェッチしSSRするための関数
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps = async () => {
  const data = (await fetch("https://google.com")).text()
  return {
    props: {
      initialCount: (await data).length
    }
  }
}

export default Home
