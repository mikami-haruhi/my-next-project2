//　サイト全体で使用する型をここに定義する
export type Category = {
    name: string;
}; //Category型を定義  

export type News = {
    id: string;
    title: string;
    category: {
    name: string
    };
    publishedAt: string;
    cretaedAt: string;
};  //News型を定義 変えたいならここをいじるといいけど、よくわからんからそのままでいいかも

