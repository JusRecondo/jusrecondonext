import styles from './page.module.scss';

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <h2>2022</h2>
      <p>
        Editó de forma independiente su primer EP de improvisación{' '}
        <a
          href="https://open.spotify.com/intl-es/album/0pZVTyuRmEfLqViE36eUPb?si=U1DKp3IbTbCLj89aUWdmwQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          “259022”
        </a>
        .
      </p>
      <h2>2024</h2>
      <p>
        Publicó su segundo EP independiente{' '}
        <a
          href="https://open.spotify.com/intl-es/album/0dXAjDTuRCSk1cFj6uqTc6?si=wlLfxKO4QzS4MpklL1LjXw"
          target="_blank"
          rel="noopener noreferrer"
        >
          “091223”
        </a>
        .
      </p>
      <h2>2025</h2>
      <p>
        En Abril de 2025 un fragmento de 091223 fue publicado como parte del
        volumen 1 del compilado
        <a
          href="https://pasajesonorooeste.bandcamp.com/album/pasaje-sonoro-oeste-volumen-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Paisaje Sonoro Oeste
        </a>
        .
      </p>
      <p>
        El 9 de Mayo de 2025 se publicó su tercer material{' '}
        <a
          href="https://fuegoamigodiscos.bandcamp.com/album/19225"
          target="_blank"
          rel="noopener noreferrer"
        >
          “19225”
        </a>
        , a través del sello
        <a
          href="https://www.instagram.com/fuego_amigo_discos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Fuego Amigo Discos.
        </a>
      </p>
      <p>
        El 17 de Octubre de 2025 se publicó su cuarto material{' '}
        <a
          href="https://fuegoamigodiscos.bandcamp.com/album/22825"
          target="_blank"
          rel="noopener noreferrer"
        >
          “22825”
        </a>{' '}
        (Fuego Amigo Discos).
      </p>
      <h2>2026</h2>

      <p>Próximamente...</p>

      <p>
        Las piezas estan disponibles en todas las plataformas incluyendo
        Bandcamp.
      </p>
    </div>
  );
};

export default Catalog;
