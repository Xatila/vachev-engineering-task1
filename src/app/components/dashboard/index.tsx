import Image from "next/image";
import { FC } from "react";

import videoImage from "@assets/images/video.png";
import { cardsData } from "@utils/cards-data";

import { Cards, Title } from "@components";

import styles from "@components/dashboard/index.module.scss";

const Dashboard: FC = () => (
  <section className={styles.container}>
    <Title
      title="Managed agency selection"
      subTitle="Strengthen your onboarding process"
    />

    <div className={styles.content}>
      <Image src={videoImage} width={300} height={500} alt="Video image" />
      <Cards cards={cardsData} />
    </div>
  </section>
);

export default Dashboard;
