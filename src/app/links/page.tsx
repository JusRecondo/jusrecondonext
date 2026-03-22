import CustomList from '@/components/custom-list';
import styles from './page.module.scss';
import data from '@/data/links-data.json';

const Links = () => {
  return (
    <div className={styles.links}>
      <section className="links-section">
        <CustomList listItems={data.rrss} />
        <CustomList listItems={data.instruments} />
        <CustomList listItems={data.recordings} />
      </section>
    </div>
  );
};

export default Links;
