import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";

// getServerSidePropsなどの関数から渡される
type PageProps = {
  initialCount: number;
};

const Home: NextPage<PageProps> = ({ initialCount }) => {
  // [getter, setter] = useState(initialState)
  const [count, setCount] = useState(initialCount);

  // useEffectの処理はレンダリング後に実行される
  useEffect(() => {
    // コンポーネントマウント時
    console.log("mounted");
  }, []);

  useEffect(() => {
    // コンポーネンレンダリング時 and count変更時
    console.log("count", count);
  }, [count]);

  useEffect(() => {
    // コンポーネンレンダリング時
    console.log("render");
  });

  return (
    <div>
      <Head>
        <title></title>
        <meta name={""} content={""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter count={count} setCount={(c) => setCount(c)} />
    </div>
  );
};

// サーバーでAPIをフェッチしSSRするための関数
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps = async () => {
  const data = (await fetch("https://google.com")).text();
  return {
    props: {
      initialCount: (await data).length,
    },
  };
};

export default Home;
