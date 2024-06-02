import { FC } from "react";

import CardView, { Card } from "@components/card-view";

import styles from "@components/cards/index.module.scss";

type Props = {
  cards: Card[];
};

const Cards: FC<Props> = ({ cards }) => (
  <div className={styles.cards}>
    {cards.map(({ title, description, icon }) => (
      <CardView
        key={title}
        title={title}
        description={description}
        icon={icon}
      />
    ))}
  </div>
);

export default Cards;
