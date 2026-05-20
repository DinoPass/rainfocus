import Image from "next/image";
import styles from "./WorkflowCard.module.scss";

type WorkflowCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  variant?: "default" | "add";
  isInteractive?: boolean;
};

export default function WorkflowCard({
  iconSrc,
  iconAlt,
  title,
  description,
  variant = "default",
  isInteractive = false,
}: WorkflowCardProps) {
  const cardClassName = [
    variant === "add" ? styles.cardAdd : styles.card,
    isInteractive ? styles.cardInteractive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <div className={variant === "add" ? styles.headerAdd : styles.header}>
        <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
