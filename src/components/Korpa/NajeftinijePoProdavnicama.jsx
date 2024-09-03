import styles from '@/styles/korpa.module.scss';
export function NajeftinijePoProdavnicama({LogoProdavnice, nazivProdavnice, cenauProdavnici, obavestenjeuProdavnicei}){
    return <div>
         <div className={styles.CenaUProdavnici}>
            <img className={styles.IzgledLogaCene} src={LogoProdavnice} alt=""/>
            <p>{nazivProdavnice}:</p>
            <p className={styles.CenaUKorpi}>{cenauProdavnici} din</p>
            <p className={styles.OpisUZagradi}>({obavestenjeuProdavnicei})</p>
          </div>
    </div>
}