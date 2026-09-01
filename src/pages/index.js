import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p>Blog ini adalah ruang sederhana tempat saya menulis, mengajar, dan terus belajar. Setiap tulisan di sini merupakan bagian dari perjalanan saya dalam memahami dan mengembangkan ilmu di bidang teknologi, khususnya pemrograman, jaringan komputer, dan pendidikan teknologi informasi.</p>
        <p>Saya percaya bahwa menulis adalah cara terbaik untuk memperdalam pemahaman. Dengan mendokumentasikan apa yang saya pelajari—baik dari pengalaman mengajar, penelitian, maupun eksplorasi pribadi—saya tidak hanya menyusun catatan untuk diri sendiri, tetapi juga berharap dapat memberikan manfaat bagi orang lain.</p>
        <p>Sebagai seorang dosen, saya berusaha menyederhanakan konsep-konsep yang kompleks agar lebih mudah dipahami. Pendekatan yang sama saya terapkan di blog ini: menghadirkan materi yang praktis, terstruktur, dan dapat langsung diterapkan, baik oleh mahasiswa maupun pembelajar mandiri.</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Selamat datang di ${siteConfig.title}`}
      description="Blog ini adalah ruang sederhana tempat saya menulis, mengajar, dan terus belajar. Setiap tulisan di sini merupakan bagian dari perjalanan saya dalam memahami dan mengembangkan ilmu di bidang teknologi, khususnya pemrograman, jaringan komputer, dan pendidikan teknologi informasi.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
