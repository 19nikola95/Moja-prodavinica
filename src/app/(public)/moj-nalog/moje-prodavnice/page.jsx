import '../../../../styles/_mojeProdavnice.scss';
import Link from "next/link";
export default function MojeProdavnice() {
  return (
  <div>
 <div className="MojNalog">
        <div className="InicijalniPodatci">
          <div className="KontenjerSlikaProfila">
            <img  className="IzgledProfilneSlike" src="/Moj nalog/bred pit.jpg" alt=""/>
            <div className="KontenjerIme">
            <p className="IzgledSlovaProfila">Nikola Milojević</p>
            <img  className="SimbolIzmeni" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerMesto">
            <p className="IzgledMestaProfila">Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className="SimbolIzmeni1" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerEmail">
            <p className="IzgledEmailaProfila">nikolamilojevic78@gmail.com</p>
            <img  className="SimbolIzmeni2" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className="KontenjerBroj">
            <p className="IzgledBrojaProfila">066001215</p>
            <img  className="SimbolIzmeni3" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
            <button className="DugmeSacuvajIzmene">Sačuvaj izmene</button>
            <button className="DugmeOdjaviSe">Odjavi se</button>
            <div className="LinijaOdvajanja"></div>
          </div>
        </div>
    <div className="BarZaNavigaciju">
    <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className="DugmeProizvodiKojiMiSeSvidjaju">Proizvodi koji mi se sviđaju</button> </Link>
        <Link href="/moj-nalog/moja-interesovanja"><button className="DugmeMojaInteresovanja">Moja interesovanja</button> </Link>
          <Link href="/moj-nalog/Istorija-korpe"> <button className="DugmeIstorijaKorpe">Istorija korpe</button></Link>
          <button className="MojeProdavnice">Moje prodavnice</button>
      </div>
    <div className="LinijaNavigacije"></div>
      <p className="IzgledIzaberiSvojeProdavnice">Izaberi svoje prodavnice</p>
      <div className="KontenjerZaProdavnice">
        <div className="PrvaKolona">
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/univerexport logo.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">Univerexport</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
        </div>
        <div className="DrugaKolona">
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">DIS</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
        </div>
        <div className="TrecaKolona">
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/Idea_Logo.svg" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">IDEA</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
        </div>
        <div className="CetvrtaKolona">
          <div className="RedZaProdavnice">
            <div className="LevaStranaReda">
              <img className="iZGLEDlOGApRODAVNICA" src="/LogoProdavnica/aman_logo_v2.png" alt=""/>
            </div>
            <div className="DesnaStranaReda">
            <p className="FontSlovaImenaProdavnica">Aman</p>
            <input className="CekboxProdavnica" type="checkbox"/>
            </div>
          </div>
        </div>
      </div>
      <button className="DugrmeSacuvajProdavnice">Sačuvaj</button>
  </div>
  </div>
  );
}