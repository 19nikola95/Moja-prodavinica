import Link from "next/link"
import '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/_glavnimenipredlogzaobroke.scss';
export default function predlogZaObroke() {
  return (
  <div>
<div class="GlavniKontenjerZaSadrzaj">
  <div className="KontenjerZaNaslov">
  <p class="IzgledSlovaNaslova">Predlog za obroke</p>
  </div>
      
      <div class="KontenjerZaPretragu">
        <input class="IzgledInputaZaProdavnice" type="text" name="" id="" placeholder="Pretraga obroka"/>
      </div>
      <div class="KontenjerSaIzboromObroka">
      <Link href="/bar-sa-naslovne/predlog-za-obroke/dorucak">
        <button class="IzgledDugmetaZaObroke">Doručak</button>
        </Link>     
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Predjelo</button>
        </Link>   
        <Link href="/bar-sa-naslovne/predlog-za-obroke/glavno-jelo/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Glavno jelo</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/dezert/glavni-meni">
        <button class="IzgledDugmetaZaObroke">Dezert</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/zimnice">
        <button class="IzgledDugmetaZaObroke">Zimnice</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/lagani-obroci-salate">
        <button class="IzgledDugmetaZaObroke">Lagani obroci i salate</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/variva-i-prilozi">
        <button class="IzgledDugmetaZaObroke">Variva i prilozi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/smuti-i-sejkovi">
        <button class="IzgledDugmetaZaObroke">Smuti i šejkovi</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/kasice-za-bebe">
        <button class="IzgledDugmetaZaObroke">Kašice za bebe</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/zdravi-obroci">
        <button class="IzgledDugmetaZaObroke">Zdravi obroci</button>
        </Link>
      </div>
      <div class="KontenjerSaObrocima">
      <Link href="/bar-sa-naslovne/predlog-za-obroke/pojedinacni-obrok">
        <div class="KontenjerSaPojedinacnimObrokom">
          <div class="KontenjerZaSliku">
            <img class="IzgledSlike" src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
          </div>
          <div class="KonjtenjerZaTekst">
            <p>Musaka</p>
          </div>
        </div>
        </Link>
        <div class="KontenjerSaPojedinacnimObrokom">
          <div class="KontenjerZaSliku">
            <img class="IzgledSlike" src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
          </div>
          <div class="KonjtenjerZaTekst">
            <p>Musaka</p>
          </div>
        </div>
        </div>
    </div>
  </div>
    );
  }
  