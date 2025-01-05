import styles from "./index.module.css";

type Props = { //Propsという名前の型を定義（Propsは小道具という意味）
    href: string;  //コンポーネントを使う際は、hrefというプロパティを必ず指定する必要がある（hrefはURLのこと）
    children: React.ReactNode;//React のコンポーネントが受け取ることができる子要素（コンテンツ）を表します。例えば、テキスト、他の React コンポーネント、または JSX を含むあらゆる内容を指定可能です。
};

//ほかのファイルで使用できるようにexportする
export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children} {/*任意のテキストや要素を渡すことが可能です。*/}
        </a>
    );
}