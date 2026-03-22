import type { GalleryItem as GalleryItemType } from '../../../types/gallery';
import GalleryItem from '../gallery-item';
import styles from './Gallery.module.scss';

interface Props {
  items: GalleryItemType[]
}

const Gallery = ({ items }: Props) => {
  return (
    <section className={styles.gallery}>
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Gallery;
