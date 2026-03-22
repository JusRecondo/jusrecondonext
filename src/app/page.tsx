import Image from 'next/image';
import styles from './page.module.scss';
import Gallery from '@/components/gallery';
import data from '@/data/gallery-data.json';

export default function Home() {
  return (
    <div className={styles.home}>
      <Gallery items={data} />
    </div>
  );
}
