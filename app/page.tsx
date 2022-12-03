import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Page() {

  return (
  <>
    <Link href="/lets-start">
      <h1 className={styles.title}>
        ¡Bienvenidos!
      </h1>
    </Link>

    <div className={styles.grid}>
      <Link href="/whats-wrong-with-me" className={styles.card}>
        <h2>¿Depresión, ansiedad, o qué me pasa?</h2>
        <p>La importancia del autoconocimiento</p>
      </Link>

      <Link href="/my-superpower" className={styles.card}>
        <h2>¿Cómo aprovechar tus singularidades?</h2>
        <p>Mi superpoder vs mi kryptonita</p>
      </Link>

      <Link href="/what-is-normal" className={styles.card}>
        <h2>¿Qué c*j*nes es la normalidad?</h2>
        <p>La normalidad como horizonte</p>
      </Link>

      <Link href="/self-reflection" className={styles.card}>
        <h2>Auto reflexión</h2>
        <p>Bienvenidos al temporal</p>
      </Link>
    </div>
  </>)
}