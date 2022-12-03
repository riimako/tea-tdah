import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image src='/home.png' alt='back to home' width={50} height={50} />
            </Link>
            <Link href="/whats-wrong-with-me">
                <div>What is wrong with me?</div>
            </Link>
            <Link href="/what-is-normal">
                <div>What is normal?</div>
            </Link>
            <Link href="/my-superpower">
                <div>My superpower</div>
            </Link>
            <Link href="/self-reflection">
                <div>Self-reflection</div>
            </Link>
        </header>
    )
}

