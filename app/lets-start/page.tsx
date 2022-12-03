import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/general.module.scss';
export default function Page() {
    return (
        <Link href="/whats-wrong-with-me">
            <Image className={styles.image} src="/terapia.jpg" alt="let's go to therapy" width={800} height={450} />
        </Link>
    )
}