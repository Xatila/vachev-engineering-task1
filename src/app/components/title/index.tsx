import { FC } from "react";

import styles from "@components/title/index.module.scss";

type Props = {
  title: string;
  subTitle: string;
};

const Title: FC<Props> = ({ title, subTitle }) => (
  <div className={styles.title}>
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </div>
);

export default Title;