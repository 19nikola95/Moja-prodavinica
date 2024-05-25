import '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/_glavnimenipredjela.scss';
import Link from "next/link"
export default function korpa() {
  return (
  <div>
 <div class="GlavniKontenjerZaSadrzaj">
      <div class="VideoReklame"></div>
      <p class="IzgledSlovaNaslova">Predjelo</p>
      <div class="KontenjerSaIzboromObroka">
      <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/topla-predjela">
        <button class="IzgledDugmetaZaObroke">Topla predjela</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/hladna-predjela-i-salate-torte">
        <button class="IzgledDugmetaZaObroke">Hladna predjela i slane torete</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/peciva">
        <button class="IzgledDugmetaZaObroke">Peciva</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/umaci">
        <button class="IzgledDugmetaZaObroke">Umaci</button>
        </Link>
      </div>
      <div class="KontenjerSaObrocima">
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