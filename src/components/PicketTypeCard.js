// components/PicketTypeCard.js
import React from 'react';
import Image from 'next/image';
import styles from './PicketTypeCard.module.scss';
import PicketStyle from './PicketStyles.js';

const PicketTypeCard = ({ name, image, description }) => (
  <div className={styles.picketTypeCard}>
    <Image src={image} alt={name} width={200} height={200} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default PicketTypeCard;
