// components/FenceTypeCard.js
import React from 'react';
import styles from './FencingTypeCards.module.scss';
import Image from 'next/image';

const FencingTypeCards = ({ name, image, description }) => (
  <div className={styles.fenceTypeCard}> 
    <Image src={image} alt={name} height={250} width={250}/>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default FencingTypeCards;
