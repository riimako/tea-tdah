import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            You can find me on
            <a
                href="https://dev.to/riimako"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/devto.png" alt="dev.to logo" width={60} height={60} />

            </a>
            <a
                href="https://www.linkedin.com/in/riinamariakorpela/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/linkedin.png" alt="linkedin logo" width={60} height={60} />

            </a>
            <a
                href="https://twitter.com/RiinaMKorpela"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/twitter.png" alt="twitter logo" width={60} height={60} />

            </a>
        </footer>
    )
}

