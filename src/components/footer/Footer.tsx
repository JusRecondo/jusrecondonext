import styles from './Footer.module.scss';
import data from "@/data/links-data.json";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        {data.rrss.map((item, index) => (
          <li key={`contact${index}`} className={styles.contactListItem}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            ) : (
              <p>{item.text}</p>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
