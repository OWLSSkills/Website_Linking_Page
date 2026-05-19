import styles from "./OnlineLearning.module.css";
import { OnlineLearningArticle } from "./OnlineLearningArticle";
import { onlineLearningArticles } from "./onlineLearningArticles";

export default function OnlineLearningPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className="gloria">Jessie Krebs Online Learning</h1>
      </header>

      {onlineLearningArticles.map((article) => (
        <OnlineLearningArticle
          key={article.title}
          {...article}
        />
      ))}
    </main>
  );
}