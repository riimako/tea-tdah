import '../styles/globals.scss';
import styles from '../styles/layout.module.scss'

import Footer from './footer';
import Head from './head';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header/>
        <div className={styles.container}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
      <Footer />
    </html>
  );
}