import styles from '@/styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
export function PojedinacnaProdavnicaOpis({logoProdavnice,nazivProdavnice, nazivProdavniceUOPis, linSajta}){
    return <div>
        <div className={styles.KontenjerNaslovILogo}>
    <img className={styles.LogoZaNaslov} src={logoProdavnice} alt=""/>
    <p className={styles.IzgledSlovaNaslova}>{nazivProdavnice}</p>
  </div>
  <div className={styles.KontenjerZaOpis}>
   <p className={styles.IzgledOpisa}>{nazivProdavniceUOPis} je market koji ima svoju aplikaciju kako bi ste uštedeli još više ili dobili neku povoljnost preuzmite aplikaciju <a href={linSajta}>Naša kartica</a></p>
   </div>
    </div>
}