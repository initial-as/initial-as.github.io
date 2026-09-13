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
        <div className={styles.heroContent}>
          {/* Status Pill Badge */}
          <div className={styles.heroPill}>
            <span className={styles.pillDot} aria-hidden="true"></span>
            <span>Eksplorasi Teknologi & Edukasi Terbuka</span>
          </div>

          {/* Display Headline */}
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>

          {/* Tagline Subtitle */}
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>

          {/* Sub-headline Narrative */}
          <p className={styles.heroDesc}>
            Ruang terbuka tempat saya mendokumentasikan riset, pengajaran, dan pengalaman praktis
            seputar pemrograman, rekayasa perangkat lunak, administrasi sistem, dan keamanan siber.
          </p>

          {/* Action CTA Buttons */}
          <div className={styles.heroCtaGroup}>
            <Link
              className={clsx('button button--primary button--lg', styles.heroBtnPrimary)}
              to="/docs/bahan-ajar/intro">
              Mulai Belajar <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.heroBtnSecondary)}
              to="/docs/tutorial/intro">
              Lihat Tutorial
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.heroBtnSecondary)}
              to="/blog">
              Baca Blog
            </Link>
          </div>

          {/* Topic Highlights */}
          <div className={styles.topicChips}>
            <span className={styles.topicLabel}>Fokus Kajian:</span>
            <span className={styles.topicChip}>💻 Pemrograman</span>
            <span className={styles.topicChip}>🐧 Administrasi Sistem/Server</span>
            <span className={styles.topicChip}>🛡️ Cybersecurity</span>
            <span className={styles.topicChip}>🌐 Pengembangan Web</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhilosophySection() {
  return (
    <section className={styles.philosophySection} aria-label="Filosofi dan Pendekatan">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>Filosofi & Pendekatan</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Menyederhanakan Kompleksitas, Memperdalam Pemahaman
          </Heading>
          <p className={styles.sectionSubtitle}>
            Tiga prinsip utama yang melandasi setiap bahan ajar dan modul praktikum di situs ini.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Peran Dosen */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIconWrapper} aria-hidden="true">
              🎓
            </div>
            <Heading as="h3" className={styles.bentoCardTitle}>
              Peran Sebagai Pendidik
            </Heading>
            <p className={styles.bentoCardText}>
              Sebagai seorang dosen, saya berupaya mengurai materi-materi teknologi yang kompleks
              agar lebih mudah dipahami—menghadirkan kurikulum yang terstruktur, praktis, dan dapat
              langsung diterapkan oleh mahasiswa maupun pembelajar mandiri.
            </p>
          </div>

          {/* Card 2: Menulis untuk Belajar */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIconWrapper} aria-hidden="true">
              ✍️
            </div>
            <Heading as="h3" className={styles.bentoCardTitle}>
              Menulis untuk Belajar
            </Heading>
            <p className={styles.bentoCardText}>
              Saya percaya bahwa menulis adalah cara terbaik memperdalam pemahaman. Mendokumentasikan
              apa yang dipelajari—dari pengalaman mengajar hingga eksperimen laboratorium—membantu
              menyusun pemikiran sekaligus memberi manfaat bagi orang lain.
            </p>
          </div>

          {/* Card 3: Orientasi Praktis */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIconWrapper} aria-hidden="true">
              ⚡
            </div>
            <Heading as="h3" className={styles.bentoCardTitle}>
              Materi Teruji & Aplikatif
            </Heading>
            <p className={styles.bentoCardText}>
              Bukan sekadar konsep teoretis, setiap panduan disiapkan dengan pendekatan eksperimental
              yang dapat langsung diuji coba. Menghubungkan dasar akademis dengan kebutuhan nyata di
              lapangan industri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCtaSection() {
  return (
    <section className={styles.bottomCtaSection} aria-label="Aksi Selanjutnya">
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaCardContent}>
            <Heading as="h2" className={styles.ctaTitle}>
              📬 Terhubung dengan Saya
            </Heading>
            <p className={styles.ctaDesc}>
              Baik untuk sekadar menyapa, berdiskusi seputar pemrograman dan jaringan, maupun membicarakan kolaborasi akademik, jangan ragu untuk menghubungi saya.
            </p>
            <div className={styles.ctaActions}>
              <Link
                className={clsx('button button--primary button--lg', styles.heroBtnPrimary)}
                to="mailto:aulia.aziz@ar-raniry.ac.id">
                Hubungi Saya <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.heroBtnSecondary)}
                to="/blog">
                Kunjungi Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Beranda | ${siteConfig.title}`}
      description="Situs ini adalah ruang sederhana tempat saya menulis, mengajar, dan terus belajar seputar pemrograman, jaringan komputer, dan pendidikan teknologi informasi.">
      <HomepageHeader />
      <main>
        <PhilosophySection />
        <HomepageFeatures />
        <BottomCtaSection />
      </main>
    </Layout>
  );
}
