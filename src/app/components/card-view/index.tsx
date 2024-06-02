import { FC } from "react";

import styles from "@components/card-view/index.module.scss";

export type Card = {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
};

const CardView: FC<Card> = ({ title, description, icon }) => (
  <div className={styles.card}>
    {icon}
    <div>
      <h3>{title}</h3>
      {description}
    </div>
  </div>
);

export default CardView;
