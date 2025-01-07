//日時のコンポーネント
import Image from "next/image"; //画像
import styles from "./index.module.css" //CSS

type Props = {
    date: string; //日時
};

export default function Date({ date }: Props) {
    return (
        <span className={styles.date}>
            <Image src="/clock.svg" alt="" width={16} height={16}
            loading="eager"/>{/*loading="eager"：画像の読み込みを「優先的に」行う設定。*/}
            {date}
        </span>
    );
}
