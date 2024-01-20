import React, { useState } from 'react';
import styles from './AccordionDropDown.module.scss';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = fenceBenefits.map((item, index) => {
    const isActive = index === activeIndex;
    const caret = isActive ? '\u25B2' : '\u25BC'; // Unicode characters for up and down carets

    return (
      <div key={item.title} className={styles.accordionItem}>
        <div
          className={`${styles.title} ${isActive ? styles.active : ''}`}
          onClick={() => onTitleClick(index)}
        >
          {item.title} <span className={styles.caret}>{caret}</span>
        </div>
        <div
          className={`${styles.content} ${isActive ? styles.active : ''}`}
        >
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className={styles.accordion}>{renderedItems}</div>;
};


const fenceBenefits = [
  {
    title: "Increased Property Value",
    content: "Fences can increase a property's value by up to 20% due to improved curb appeal."
  },
  {
    title: "Security",
    content: "A fence adds a layer of security to a property, a significant selling point in urban areas."
  },
  {
    title: "Privacy",
    content: "Fences provide privacy from neighbors and passersby, highly valued by many homeowners."
  },
  {
    title: "Safety for Children and Pets",
    content: "Fences create a safe space for children and pets to play without the risk of wandering onto the street."
  },
  {
    title: "Noise Reduction",
    content: "Proper fencing can reduce noise pollution from busy streets, making the home environment more peaceful."
  },
  {
    title: "Aesthetic Appeal",
    content: "An attractive fence can enhance the visual appeal of a property, contributing to a positive first impression."
  },
  {
    title: "Boundary Definition",
    content: "Fences clearly delineate property lines, which can prevent disputes with neighbors."
  },
  {
    title: "Landscaping Enhancement",
    content: "Fences can be integrated into landscaping designs, contributing to the overall aesthetics of the property."
  },
  {
    title: "Reduced Trespassing",
    content: "A visible fence serves as a deterrent to trespassers and can reduce the likelihood of unwelcome visitors."
  },
  {
    title: "Increased Buyer Interest",
    content: "Homes with fences often attract more buyers due to the added benefits of privacy and security."
  }
];



export default Accordion;
