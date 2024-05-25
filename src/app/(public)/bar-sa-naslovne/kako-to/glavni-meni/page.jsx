import '../../../../../styles/bar-za-naslovnu/kako-to/_glavnimenikakoto.scss';
import Link from "next/link"
export default function kontaktirajnas() {
  return (
  <div>
<div className="KontenjerSaSadrzajem">
        <p className="SlovaNaslova">Kako to ?</p>
        <p className="SlovaOpisa">(U sekciji kako to naćićete odgovore na većinu svakodnevnih problema sa kojima se suočavate.)</p>
        <div className="KontenjerZaPretragu">
          <input className="IzgledInputaZaProdavnice" type="text" name="" id="" placeholder="Kako to ?"/>
        </div>
        <Link href="/bar-sa-naslovne/kako-to/pojedinacni-tab">
        <div className="KontenjerSaResenjima">
        <div className="KontenjerSaIzgledom">
          <div className="KontenjerSaIzgledomGornji">
            <img className="IzgledSlikeLoga" src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className="KontenjerSaIzgledomDonji">
            <p>Kako oprati stvari</p>
          </div>
        </div>
        </div>
        </Link>
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
