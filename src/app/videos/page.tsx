import Gallery from '@/components/gallery';
import styles from './page.module.scss';
import data from '@/data/videos-data.json';

const Videos = () => {
  return <div className={styles.videos}>
    <Gallery items={data} />
  </div>;
};

export default Videos;
