import Image from "next/image";

import { Card } from "@components";

import briefImage from "@assets/images/brief.png";
import searchImage from "@assets/images/search.png";
import pitchImage from "@assets/images/pitch.png";

const size = 60;

export const cardsData: Card[] = [
  {
    title: "Brief",
    description: (
      <p>
        Complete{" "}
        <strong>
          brief writing or
          <br /> simple guidance
        </strong>{" "}
        on what to
        <br /> include, we&apos;ve got you covered.
      </p>
    ),
    icon: (
      <Image
        width={size}
        height={size}
        src={briefImage}
        alt="Brief card image"
      />
    ),
  },
  {
    title: "Search",
    description: (
      <p>
        In-depth agency search covering;
        <br /> <strong>criteria matching</strong>, door knocking
        <br /> and due-dilligencevetting.
      </p>
    ),
    icon: (
      <Image
        width={size}
        height={size}
        src={searchImage}
        alt="Search card image"
      />
    ),
  },
  {
    title: "Pitch",
    description: (
      <p>
        Comprehensive <strong>pitch management</strong>,
        <br />
        including comms, diary management
        <br /> and pitch hosting.
      </p>
    ),
    icon: (
      <Image
        width={size}
        height={size}
        src={pitchImage}
        alt="Pitch card image"
      />
    ),
  },
];
