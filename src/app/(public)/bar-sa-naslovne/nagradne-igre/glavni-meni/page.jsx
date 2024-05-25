import '../../../../../styles/bar-za-naslovnu/nagradne-igre/_glavnimeninagradneigre.scss';
import Link from "next/link"
export default function GlavniMeniNagradneIgre() {
  return (
  <div>
<div className="GlavniKontenjerZaSadrzaj">
<div class="PozicijaNaslova">
      <p className="IzgledSlovaNaslova">Sve nagradne igre</p>
      </div>
      <div className="ProstorZaKontenjereNagradneIgre">
      <Link href="/bar-sa-naslovne/nagradne-igre/pojedinacni-meni">
      <div className="KontenjerZaNagradnuIgru">
        <div className="GornjiDeoZaNagradnuIgru">
          <img className="SlikaNagradneIgre" src="/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg" alt=""/>
        </div>
        <div className="DonjiDeoZaNagradneIgre">
          <div className="DonjiDeoZaNaslov">
            <p className="SlovaNaslovaIgre">Lav nagradna igra 2024: Osvoji auto uz Lav pivo</p>
          </div>
          <div className="DonjiDeoZaTrajanje">
            <p className="SlovaTrajanjeIgre">Trajanje: 15.04.2024 do 26.05.2024</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
    <div className="KontenjerZaDugmice">
      <button className="DugmrStrane">1</button>
      <button className="DugmrStrane">2</button>
      <button className="DugmrStrane">3</button>
      <button className="DugmrStrane">4</button>
      <button className="DugmrStrane">5</button>
    </div>
    </div>
      </div>
    );
  }