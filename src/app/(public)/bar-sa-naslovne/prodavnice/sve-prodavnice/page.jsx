import '../../../../../styles/bar-za-naslovnu/prodavnice/_sveprodavnice.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
<div class="KontenjerPocetneStrane">
  <div class="PozicijaNaslova">
  <p class="IzgledNaslova">Sve prodavnice</p>
  </div>
        <div class="KontenjerZaPretragu">
          <input class="IzgledInputaZaProdavnice" type="text" name="" id="" placeholder="Unesi naziv prodavnice"/>
        </div>
        <div class="KontenjerSaProdavnicama">
        <Link href="/bar-sa-naslovne/prodavnice/pojedinacna-prodavnica">
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p class="ImeMarketa">DIS</p>
              <p class="UlicaIbroj">(Smederevska Palanka, Trgovačka 26)</p>
            </div>
          </div>
          </Link>
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p class="ImeMarketa">DIS</p>
            </div>
          </div>
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p class="ImeMarketa">DIS</p>
            </div>
          </div>
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p class="ImeMarketa">DIS</p>
            </div>
          </div>
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p>DIS</p>
            </div>
          </div>
          <div class="KontenjerSaIzgledom">
            <div class="KontenjerSaIzgledomGornji">
              <img class="IzgledSlikeLoga" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div class="KontenjerSaIzgledomDonji">
              <p>DIS</p>
            </div>
          </div>
          
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