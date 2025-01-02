import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string
  };
  publishedAt: string;
  cretaedAt: string;
};

const data: {
contents: News[]} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/01/02",
      cretaedAt: "2025/01/02",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/01/02",
      cretaedAt: "2025/01/02",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/01/02",
      cretaedAt: "2025/01/02",
    },
  ],
};

export default function Home(){
  return(
    <>
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
    </div>
    <Image
    className={styles.bgimg}
    src="/img-mv.jpg"
    alt="" 
    width={4000}
    height={1200}
    />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <ul>
      </ul>
    </section>
    </>
  );
}
