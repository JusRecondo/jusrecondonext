import styles from './page.module.scss';

const Bio = () => {
  return (
    <div className={styles.bio}>
      <p>
        Jus Recondo es músique y programadore originarie de Merlo, Bs. As.
        (1994). <br />
        Se formó como docente de música con orientación en guitarra en el
        Conservatorio “Alberto Ginastera” y continuó sus estudios en música
        contemporánea en el Conservatorio “Manuel de Falla”, especializándose en
        la interpretación de obras de los siglos XX y XXI.
      </p>
      <p>
        Desde 2009 ha participado en diversos proyectos musicales como
        guitarrista, bajista y/o en los sintetizadores, recorriendo estilos que
        van desde el blues y la cumbia hasta el rock alternativo y el punk.
        También se ha presentado en conciertos solistas y en ensambles de música
        de cámara.
      </p>
      <p>
        A partir 2020 se dedicó a la exploracion sonora y composicion a través
        de la guitarra eléctrica y sintetizadores, conformando en 2021 un dúo de
        improvisación llamado{' '}
        <a
          href="https://ipjripjr.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPJR
        </a>{' '}
        junto a le artista{' '}
        <a
          href="https://www.instagram.com/iirepaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ire Paz
        </a>
        .
      </p>
      <p>
        En 2024 comenzó a tocar la guitarra en{' '}
        <a
          href="https://www.instagram.com/lacaradelosultimos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          “La Cara de los Últimos”
        </a>{' '}
        y actualmente también forma parte del dúo{' '}
        <a
          href="https://www.instagram.com/nave_wav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nave
        </a>
        , en el cual se desempeña como compositore, productore, bajista y
        cantante. Además de tocar en bajo en la banda de "Ire Paz y la corteza
        eléctrica".
      </p>
      <p>
        <strong>
          Desde 2022 se presenta de manera solista realizando un set donde
          plantea la improvisación sonora como el desarrollo de espacios y
          escenas, recorriendo un camino con una narrativa construida a través
          de cambios en densidad, timbres y grados de organización. Utiliza como
          recursos principales la guitarra eléctrica, los sintetizadores
          experimentales que desarrolló y que suenan desde su celular, junto con
          samples de sonidos procesados.
        </strong>
      </p>

      <p>
        <strong>
          Su enfoque propone una narrativa abstracta en constante
          transformación, combinando performance, tecnología y experimentación
          sonora.
        </strong>
      </p>

      <p>
        Jus Recondo es una persona trans no binarie y autista, siendo estos dos
        aspectos parte de su identidad, ambos se reflejan en su música.
      </p>

      <p>
        Ha publicado material tanto de forma independiente como a través del
        sello{' '}
        <a
          href="https://www.instagram.com/fuego_amigo_discos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Fuego Amigo Discos.
        </a>
      </p>
      <h2>
        <a href="/catalogo" className={styles.catalogLink}>
          &gt;&gt;catálogo
        </a>
      </h2>
    </div>
  );
};

export default Bio;
