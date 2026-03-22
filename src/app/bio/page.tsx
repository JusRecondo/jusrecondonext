import styles from './page.module.scss';

const Bio = () => {
  return (
    <div className={styles.bio}>
      <p>
        Jus Recondo es músique y programadore originarie de Merlo, Bs. As.
        (1994). <br />
        Egresó del profesorado de música del Conservatorio “Alberto Ginastera”
        en 2019 y luego cursó en la Diplomatura de música contemporánea del
        Conservatorio “Manuel de Falla”, profundizando en la interpretación de
        obras para guitarra de los siglos XX y XXI.
      </p>
      <p>
        Desde 2009 ha participado en diversos proyectos musicales como
        guitarrista, bajista y/o en los sintetizadores, tocando estilos desde
        pop hasta la cumbia, pasando por el blues, el rock alternativo y el
        punk. También ha dado conciertos de guitarra solista y con ensambles de
        música de cámara.
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
          samples de sonidos procesados, sumando ocasionalmente otros elementos
          como radios am/fm o colaborando con otres músiques para improvisar.
        </strong>
      </p>

      <p>
        Jus Recondo es una persona trans no binarie y autista, siendo estos dos
        aspectos parte de su identidad ambos se reflejan en su música.
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
