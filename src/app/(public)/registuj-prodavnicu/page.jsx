import styles from '../../../styles/registrujprodavnicu.module.scss';
export default function registrujprodavnicu() {
  return (
      <div>
    <div className={styles.KontenjerZaKontaktirajNas}>
   <div className={styles.KontenjerGornjegObaveštenja}>
        <p className={styles.IzgledSlovaObavestenja}>Ukoliko imate prodavnicu i želite da bude vidljiva sivma preko aplikacije popunite formular ispod</p>
        </div>
        <p className={styles.IzgledSlovaNaslovaOProdavnici}>Podaci o prodavnici:</p>
        <div className={styles.KontenjerNazivProdavnice}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Naziv prodavnice:</p>
          <input className={styles.IzgledSvihInputaZaKontaktirajNas} type="text"/>
        </div>
        <div className={styles.KontenjerMestoProdavnice}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Mesto:</p>
          <input className={styles.IzgledMestoInputaZaKontaktirajNas} type="text"/>
        </div>
        <div className={styles.KontenjerUlicaProdavnice}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Ulica:</p>
          <input className={styles.IzgledSvihInputaZaKontaktirajNas} type="text"/>
        </div>
        <div className={styles.KontenjerBrojProdavnice}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Broj:</p>
          <input className={styles.IzgledBrojInputaZaKontaktirajNas} type="text"/>
        </div>
        <p  className={styles.IzgledSlovaNaslovaOvlasniku}>Podaci o vlasniku prodavnice:</p>
        <div className={styles.KontenjerImeVlasnika}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Ime:</p>
          <input className={styles.IzgledImeInputaZaKontaktirajNas} type="text"/>
        </div>
        <div className={styles.KontenjerPrezime}>
          <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Prezime:</p>
          <input className={styles.IzgledImeInputaZaKontaktirajNas} type="text"/>
        </div>
        <div className={styles.KontenjerBrojTelefona}>
        <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Broj telefona:</p> 
        <input className={styles.IzgledImeInputaZaKontaktirajNas} type="text"/>
      </div>
      <div className={styles.KontenjeEmail}>
        <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Email:</p>
        <input className={styles.IzgledEmailInputaZaKontaktirajNas} type="text"/>
      </div>
      <button className={styles.IzgledDugmetaZaRegistraciju}>Registracija</button>
      <div className={styles.Okvir1}>
      </div>
      
      <div className={styles.KontenjerDodatneInfromacije}>
      <p className={styles.DodatneInfromacije}>Za sve dodatne infromacije kontaktirajte nas</p>
      </div>
    <div className={styles.Informacije}>
    <div className={styles.KontenjeEmailObavestenja}>
      <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Email:</p>
      <input className={styles.IzgledEmailInputaZaKontaktirajNas1} type="text" placeholder="Unesite vaš email"/>
    </div>
    <div className={styles.KontenjeBrojlObavestenja}>
      <p className={styles.IzgledSvihTekstovaZaKontaktirajNas}>Broj telefona:</p>
      <input className={styles.IzgledImeInputaZaKontaktirajNas} type="text" placeholder="Unesite vaš broj"/>
    </div>
    </div>
     <div className={styles.KontenjerTekstUputa}>
      <p className={styles.IzgledObavestenjaTekstovaZaKontaktirajNas}>Ukoliko imate dodatne zahteve, pitanja ili nekih nejasnoća ovde slobodno pitajte:</p>
      </div>
      <div className={styles.PostaviPitanje}>
      <textarea rows="10" className={styles.IzgledBoxObavestenjaInputaZaKontaktirajNas} type="text" placeholder="Šta god vas zanima ovde napišite"></textarea>
      </div>
    
  </div>
  <div className={styles.KontenjerZaDugme}>
    <button className={styles.DugmeUpit}>Pošalji upit</button>
    </div>
  </div>
  );
}