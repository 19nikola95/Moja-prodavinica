import styles from '../../../styles/kontaktirajnas.module.scss';
export default function kontaktirajnas() {
  return (
  <div>
    <div className={styles.KontenjerZaKontaktirajNasPravi}>
      <div className={styles.Kontenjerzanaslov}>
      <p className={styles.IzgledNaslova}>Kontektirajte nas</p>
      </div>
      
      <div className={styles.KontenjerOpisa}>
      <p className={styles.Opis}>Aplikacija Moja prodavnica je napravljena kako bi pomogla svim korisnicima prilikom kupovine. Cilj nam je da aplikacija bude korisna i efikasna. Ukoliko imate predlog za poboljšanje slobodno podelite to sa nama jer cenimo Vaše mišljenje i uzećemo u obzir za nova poboljšanja. Takođe ukoliko Vas nešto zanima ili imate zanimljivu temu posetite naš blog.</p>
      </div>
      <div className={styles.KontenjeEmailObavestenja}>
        <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Email:</p>
        <input className={styles.IzgledEmailInputaZaKontaktirajNas} type="text" placeholder="Unesite vaš email"/>
      </div>
      <textarea rows="10" className={styles.IzgledBoxObavestenjaInputaZaKontaktirajNas} type="text" placeholder="Napišite poruku"></textarea>
      </div>
      <div className={styles.KontenjerZaDugme}>
      <button className={styles.DugmeZaPoruku}>Pošalji poruku</button>
      </div>
  </div>
  );
}
