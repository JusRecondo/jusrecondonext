"use client";
import Image from 'next/image';
import type { GalleryItem } from '../../../types/gallery';
import styles from './GalleryItem.module.scss';
import { useState } from 'react';

interface Props {
  item: GalleryItem; 
}

const GalleryItem = ({ item }: Props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article
      className={styles.galleryItem}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {item.type === 'embed' ? (
        <iframe
          className={styles.iframe}
          src={item.content}
          frameBorder="0"
          allowFullScreen
          title={item.info}
        ></iframe>
      ) : item.type === 'image' ? (
        <>
          <p className={`${styles.itemInfo} ${showInfo && styles.showInfo}`}>
            {item.info}
          </p>
          <Image width={450} height={450} className={styles.image} src={item.content} alt={item.info} />
        </>
      ) : item.type === 'video' ? (
        <iframe
          className={styles.video}
          src={item.content}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : null}
    </article>
  );
};

export default GalleryItem;