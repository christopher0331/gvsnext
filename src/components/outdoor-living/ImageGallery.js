import { useState, useEffect } from 'react';
import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa';
import styles from './ImageGallery.module.scss'

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/74505337-9ac6-4a35-5cdd-536aed33f000/public', alt: 'Beautiful pergola with climbing vines' },
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e03d5e94-a080-4fc6-c798-c1c81c1b0c00/public', alt: 'Stamped concrete patio with outdoor furniture' },
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/52ac5659-3dfd-4958-a709-af7dd3277400/public', alt: 'Luxurious outdoor kitchen with grill and bar' },
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/c7155e3f-efe8-4ab8-9d83-1841cfd96600/public', alt: 'Lush landscaping around a pergola' },
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/accb7b21-814b-45c1-0d56-cca589a9fa00/public', alt: 'Modern pergola with built-in lighting' },
    { src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/c6e994fb-55b1-4fd8-1e49-baaabbe9c700/public', alt: 'Cozy fire pit area with seating' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      const screenWidth = window.innerWidth;
      const imagesPerRow = screenWidth > 1024 ? 3 : 2;
      const imageCount = images.length;
      const remainder = imageCount % imagesPerRow;
      
      if (remainder === 0) {
        setDisplayImages(images);
      } else {
        const paddingCount = imagesPerRow - remainder;
        const paddedImages = [...images, ...Array(paddingCount).fill(null)];
        setDisplayImages(paddedImages);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (image) => {
    if (isMobile) {
      setSelectedImage(selectedImage === image ? null : image);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <section className={styles.gallery}>
      <h2 className={styles.sectionTitle}>Inspiration Gallery</h2>
      <div className={styles.imageGrid}>
        {displayImages.map((image, index) => (
          image ? (
            <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(image)}>
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
              <div className={styles.infoIcon}>
                <FaInfoCircle />
              </div>
              <div className={`${styles.imageOverlay} ${selectedImage === image ? styles.active : ''}`}>
                <p>{image.alt}</p>
              </div>
            </div>
          ) : (
            <div key={index} className={styles.imageWrapper} style={{ visibility: 'hidden' }}></div>
          )
        ))}
      </div>
      {selectedImage && !isMobile && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent}>
            <Image src={selectedImage.src} alt={selectedImage.alt} layout="fill" objectFit="contain" />
            <p className={styles.lightboxCaption}>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
