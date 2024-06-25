import styles from '../../../styles/korpa.module.scss';
export default function korpa() {
  return (
  <div>
<div className={styles.KontenjerKorpe}>
        <div className={styles.KontenjerZaNaslov}>
        <p className={styles.TekstNaslova}>Korpa</p>
        </div>
      <div className={styles.KontenjerSaSvimInformacijama}>
        <div className={styles.LevaStranaKontenjeraSaSvimInformacijama}>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najeftinije prodavnice/marketi u vašem mestu gde možete kupiti:</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(DIS ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Najbliža prodavnice/marketi u kome mozete kupiti sve:</p>
          </div>
          <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>Univerexport:</p>
            <p className={styles.CenaUKorpi}>3451 din</p>
            <p className={styles.OpisUZagradi}>(Univerexport ima svoju aplikaciju preko koje mozete dobiti dodatne popuste)</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>U vasoj najblizoj prodavnici možete uzeti sledeće namernice:</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
            <p>Jaja, mleko, brasno, keks</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Njeftiniji proizvodi po prodavnicama/marketima:</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
            <p className={styles.TekstPoProdavnicama}>- Jaja</p>
            <p className={styles.TekstPoProdavnicama}>- Brasno</p>
            <p className={styles.TekstPoProdavnicama}>- Secer</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
            <p className={styles.TekstPoProdavnicama}>- Jaja</p>
            <p className={styles.TekstPoProdavnicama}>- Brasno</p>
            <p className={styles.TekstPoProdavnicama}>- Secer</p>
          </div>
          <div className={styles.KontenjerInformacijeObavestenjaZaPoProdavnicama}>
            <img className={styles.IzgledLogaCene} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            <p>DIS</p>
          </div>
          <div className={styles.IspisNamernicaKojeSeMoguKupiti}>
            <p className={styles.TekstPoProdavnicama}>- Jaja</p>
            <p className={styles.TekstPoProdavnicama}>- Brasno</p>
            <p className={styles.TekstPoProdavnicama}>- Secer</p>
          </div>
        </div>
        <div className={styles.DesnaStranaKontenjeraSaSvimInformacijama}>
          <div className={styles.KontenjerInformacijeObavestenja}>
            <p>Proizvodi iz vase korpe:</p>
          </div>
         <div className={styles.KontenjerZaDugmice}>
          <button className={styles.Dugmici}>Odštampaj</button>
          <button className={styles.Dugmici}>Pošalji</button>
          <input className={styles.IzgledCekBoxa} type="checkbox"/>
          <p>Ukoliko želite  spisak sa proizvodima podeljenim po prodavnicama čekirajte ovde.</p>
         </div>
         <div className={styles.KontenjerSvihIzabranihProizvoda}>
            <div className={styles.RedZaProizvode}>
              <img className={styles.SlikaProizvodaIzKorpe} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <p>Bademovo mleko</p>
              <input className={styles.BrojProizvoda} type="number"/>
              <img className={styles.IzgledZamene} src="/SlikeZnakova/zamena.png" alt=""/>
              <img className={styles.IzgledX} src="/SlikeZnakova/izgled x.jpg" alt=""/>
            </div>
            <div className={styles.RedZaProizvode}>
              <img className={styles.SlikaProizvodaIzKorpe} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <p>Bademovo mleko</p>
              <input className={styles.BrojProizvoda} type="number"/>
              <img className={styles.IzgledZamene} src="/SlikeZnakova/zamena.png" alt=""/>
              <img className={styles.IzgledX} src="/SlikeZnakova/izgled x.jpg" alt=""/>
            </div>
            <div className={styles.RedZaProizvode}>
              <img className={styles.SlikaProizvodaIzKorpe} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <p>Bademovo mleko</p>
              <input className={styles.BrojProizvoda} type="number"/>
              <img className={styles.IzgledZamene} src="/SlikeZnakova/zamena.png" alt=""/>
              <img className={styles.IzgledX} src="/SlikeZnakova/izgled x.jpg" alt=""/>
            </div>
          
         </div>
        </div>
      </div>
      </div>
  </div>
  );
}