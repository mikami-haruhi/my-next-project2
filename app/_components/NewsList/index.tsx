import Image from "next/image";

import styles from "./page.module.css";

type News = {
    id: string;
    title: string;
    category: {
    name: string
    };
    publishedAt: string;
    cretaedAt: string;
};

type Props = {
    news: News[];
};//ニュースの配列を props として受け取る。

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return<p>記事がありません</p>;
    } //ニュースが空の場合、<p>記事がありません</p> を表示して終了。
    return(
        <ul>
        {news.map((article) => (
            <li key={article.id} className={styles.list}>
            <div className={styles.link}>
            <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            />
            <dl className={styles.content}>
                <dt className={styles.newsItemTitle}>{article.title}</dt>
                <dd className={styles.meta}>
                <span className={styles.tag}>{article.category.name}</span>
                <span className={styles.date}>
                    <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                    />
                    {article.publishedAt}
                    </span>
                </dd>
            </dl>
            </div>
            </li>
        ))}
        </ul>
    );
}
