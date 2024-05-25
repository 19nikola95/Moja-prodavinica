import '../../../../../styles/bar-za-naslovnu/prodavnice/_pojedinacneProdavnice.scss';
export default function pocetna() {
  return (
  <div>
<div class="KontenjerSadrzaja">
  <div class="VideoReklame"></div>
  <div class="KontenjerNaslovILogo">
    <img class="LogoZaNaslov" src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
    <p class="IzgledSlovaNaslova">DIS</p>
  </div>
   <p class="IzgledOpisa">Dis je market koji ima svoju aplikaciju kako bi ste uštedeli još više ili dobili neku povoljnost preuzmite aplikaciju <a href="https://www.nasakartica.rs/">Naša kartica</a></p>
        <div class="KontenjerSaSvimProizvodima">
          <div class="KontenjerProizvoda">
            <div class="GornjiDeoKontenjeraProizvoda">
              <img class="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div class="KontenjerZaTekstProizvoda">
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>Mleko od badema</p>
                </div>
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>350g</p>
                </div>
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>Doktor etker</p>
                </div>
                <div class="IzgledSlovaCena">
                  <p><b>356,22 din</b></p>
                </div>
              </div>
            </div>
            <div class="DonjiDeoKontenjeraProizvoda">
             <input class="IzgledOdabiraKolicine" type="number" placeholder="0"/>
             <img  class="IzgledKorpeUKontenjeruZaProizvod" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div class="KontenjerProizvoda">
            <div class="GornjiDeoKontenjeraProizvoda">
              <img class="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
              <div class="KontenjerZaTekstProizvoda">
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>Mleko od badema</p>
                </div>
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>350g</p>
                </div>
                <div class="RedUKontenjeruZaTekstProizvoda">
                  <p>Doktor etker</p>
                </div>
                <div class="IzgledSlovaCena">
                  <p>356,22 din</p>
                </div>
              </div>
            </div>
            <div class="DonjiDeoKontenjeraProizvoda">
             <input class="IzgledOdabiraKolicine" type="number" placeholder="0"/>
             <img  class="IzgledKorpeUKontenjeruZaProizvod" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
        </div>
        <div class="KontenjerZaDugmice">
          <button class="DugmrStrane">1</button>
          <button class="DugmrStrane">2</button>
          <button class="DugmrStrane">3</button>
          <button class="DugmrStrane">4</button>
          <button class="DugmrStrane">5</button>
        </div>
</div>
  </div>
    );
  }