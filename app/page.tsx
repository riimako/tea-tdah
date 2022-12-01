import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Page() {

  return (<>
    <Link href="/lets-start">
      <h1 className={styles.title}>
        ¡Bienvenidos!
      </h1>
    </Link>

    <div className={styles.grid}>
      <Link href="/whats-wrong-with-me" className={styles.card}>
        <h2>¿Depresión, ansiedad, o qué me pasa?</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </Link>

      <Link href="/what-is-normal" className={styles.card}>
        <h2>¿Qué c*j*nes es la normalidad?</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </Link>


      <Link href="/who-i-am" className={styles.card}>
        <h2>¿Cómo aprovechar tus singularidades?</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </Link>


      <Link href="/self-reflection" className={styles.card}>
        <h2>Auto reflexión</h2>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </Link>
    </div>
  </>)
}