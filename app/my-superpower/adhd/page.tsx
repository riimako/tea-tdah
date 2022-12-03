import Image from 'next/image';
import styles from '../../styles/general.module.scss';
export default function Page() {
    return (
    <>
        <Image className={styles.image} src="/adhd.jpg" alt="let's go to therapy" width={800} height={450} />

        <Image className={styles.image} src="/ahdh2.jpg" alt="let's go to therapy" width={800} height={450} />
        <p>como me cuesta dinero?
el curso online que nunca terminé o terminé después de pagar meses y meses
comida que se te olvida y se pasa de su fecha
compra impulsiva de ropa que nunca te pones
cancelar demasiado y pagar gastos
compra de productos que nunca usas</p>
    </>
    )
}