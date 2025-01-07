//カテゴリーをコンポーネント化する（更新情報の部分のこと）
import type { Category } from "@/app/_libs/microcms"; //型定義をインポート
import styles from "./index.module.css"; //CSSモジュールをインポート

type Props = {
    category: Category;
};//propsにcategory属性のCategoryを渡す
export default function Category({ category }: Props) {
    return <span className={styles.tag}>{category.name}</span>;
}//カテゴリーを表示するコンポーネントを作成