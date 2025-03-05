import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { FaInfoCircle, FaArrowLeft, FaArrowRight, FaTimes, FaSearch } from 'react-icons/fa';
import styles from './ImageGallery.module.scss'

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'pergolas', name: 'Pergolas' },
    { id: 'decorativeDoors', name: 'Decorative Doors' },
    { id: 'stampedConcrete', name: 'Stamped Concrete' },
    { id: 'outdoorShed', name: 'Outdoor Sheds' }

  ];

  const images = [
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/74505337-9ac6-4a35-5cdd-536aed33f000/public', 
      alt: 'Beautiful pergola with climbing vines',
      categories: ['pergolas']
    },
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e03d5e94-a080-4fc6-c798-c1c81c1b0c00/public', 
      alt: 'Beautiful custom built decorative doors',
      categories: ['decorativeDoors']
    },
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/52ac5659-3dfd-4958-a709-af7dd3277400/public', 
      alt: 'Gorgeous outdoor sheds',
      categories: ['outdoorShed']
    },
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/c7155e3f-efe8-4ab8-9d83-1841cfd96600/public', 
      alt: 'Beautifull stamped concrete patios and driveways',
      categories: ['stampedConcrete']
    },
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/accb7b21-814b-45c1-0d56-cca589a9fa00/public', 
      alt: 'Modern pergola with built-in lighting',
      categories: ['stampedConcrete']
    },
    { 
      src: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/c6e994fb-55b1-4fd8-1e49-baaabbe9c700/public', 
      alt: 'Cozy fire pit area with seating',
      categories: ['firepits']
    }
  ];

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.categories.includes(currentCategory));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Outdoor Living Inspiration Gallery</h2>
        <p className={styles.sectionSubtitle}>Browse our collection of custom outdoor living spaces designed for Colorado homes</p>
        
        <div className={styles.categoriesWrapper}>
          <button 
            className={styles.scrollButton} 
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>
          
          <div className={styles.categories} ref={sliderRef}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${currentCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <button 
            className={styles.scrollButton} 
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        </div>
        
        <div className={styles.imageGrid}>
          {filteredImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(image)}>
              <div className={styles.imageContainer}>
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
                <div className={styles.imageOverlay}>
                  <div className={styles.zoomIcon}>
                    <FaSearch />
                  </div>
                  <p>{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className={styles.noResults}>
            <p>No images found in this category. Please select another category.</p>
          </div>
        )}
      </div>
      
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            
            <div className={styles.lightboxImageWrapper}>
              <Image src={selectedImage.src} alt={selectedImage.alt} layout="fill" objectFit="contain" />
            </div>
            
            <div className={styles.lightboxControls}>
              <button className={styles.navButton} onClick={handlePrevImage}>
                <FaArrowLeft />
              </button>
              <p className={styles.lightboxCaption}>{selectedImage.alt}</p>
              <button className={styles.navButton} onClick={handleNextImage}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
