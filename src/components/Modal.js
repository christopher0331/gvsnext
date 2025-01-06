import React, { useState } from 'react';
import styles from './ProjectModal.module.scss';

const Modal = ({ show, onClose, projectImages }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!show) {
		return null;
	}

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1));
	};

	const handlePrev = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1));
	};

	const handleThumbnailClick = (index) => {
		setCurrentImageIndex(index);
	};

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={onClose}>
					&times;
				</button>
				<div className={styles.modalBody}>
					<div className={styles.imageContainer}>
						<img
							src={projectImages[currentImageIndex].url}
							alt={`Project image ${currentImageIndex + 1}`}
							className={styles.modalImage}
						/>
					</div>
					<div className={styles.thumbnailContainer}>
						{projectImages.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={`Thumbnail ${index + 1}`}
								className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
								onClick={() => handleThumbnailClick(index)}
							/>
						))}
						<div className={styles.scrollIndicator}>&#x2192;</div>
					<div className={styles.scrollText}>Scroll</div>
					</div>
				</div>
				<div className={styles.navigationButtons}>
					<button onClick={handlePrev}>Previous</button>
					<button onClick={handleNext}>Next</button>
				</div>
				<div className={styles.imageCounter}>
					{currentImageIndex + 1} / {projectImages.length}
				</div>
			</div>
		</div>
	);
};

export default Modal;