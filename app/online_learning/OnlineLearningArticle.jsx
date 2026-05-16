import Image from "next/image";
import styles from "./OnlineLearning.module.css";

export function OnlineLearningArticle({
  title,
  date,
  subtitle,
  imageSrc,
  imageAlt,
  paragraphs,
  link,
  imageSide = "left",
  background = "green",
}) {
  const isMirrored = imageSide === "right";

  return (
    <section
      className={`${styles.articleSection} ${
        background === "lavender" ? styles.articleSectionLavender : styles.articleSectionGreen
      }`}
    >
      <div className={styles.articleShell}>
        <h2>{title}</h2>

        <div
          className={`${styles.articleGrid} ${
            isMirrored ? styles.articleGridMirrored : ""
          }`}
        >
          <aside className={styles.articleMeta}>
            <div className={styles.date}>{date}</div>
            <div className={styles.source}>{subtitle}</div>

            <div className={styles.imageWrap}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
                className={styles.articleImage}
                sizes="(max-width: 820px) 90vw, 390px"
              />
            </div>
          </aside>

          <article className={styles.articleBody}>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {link && link !== "#" && (
              <a
                className={styles.articleLink}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to go to the full article
              </a>
            )}

            {link === "#" && (
              <span className={styles.articleLink}>
                Click here to go to the full article
              </span>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}