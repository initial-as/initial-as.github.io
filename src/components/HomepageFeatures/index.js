import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Bahan Ajar',
    badge: 'Kurikulum Terstruktur',
    Svg: require('@site/static/img/bahan-ajar.svg').default,
    description:
      'Materi perkuliahan terstruktur yang dirancang untuk membantu mahasiswa memahami konsep teknologi informasi secara komprehensif dan mudah dicerna.',
    tags: ['Pemrograman Berorientasi Objek', 'Administrasi Sistem', 'Cybersecurity'],
    link: '/docs/bahan-ajar/intro',
    buttonText: 'Jelajahi Bahan Ajar',
  },
  {
    title: 'Tutorial',
    badge: 'Praktikum & Hands-on',
    Svg: require('@site/static/img/tutorial.svg').default,
    description:
      'Panduan praktis langkah demi langkah untuk menguji coba, membangun proyek, dan menguasai penerapan teknologi secara nyata melalui eksperimen.',
    tags: ['Panduan Teknis', 'Praktik Langsung', 'Troubleshooting'],
    link: '/docs/tutorial/intro',
    buttonText: 'Buka Tutorial',
  },
  {
    title: 'Blog',
    badge: 'Catatan & Wawasan',
    Svg: require('@site/static/img/blog.svg').default,
    description:
      'Refleksi personal seputar proses pengajaran, riset, inovasi pedagogi, serta eksplorasi tren terbaru di dunia teknologi dan rekayasa perangkat lunak.',
    tags: ['Pengalaman', 'Refleksi Diri', 'Tren Teknologi'],
    link: '/blog',
    buttonText: 'Baca Tulisan Blog',
  },
];

function FeatureCard({ title, badge, Svg, description, tags, link, buttonText }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.badge}>{badge}</span>
      </div>

      <div className={styles.iconWrapper}>
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>

      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDesc}>{description}</p>

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {link && buttonText && (
        <div className={styles.actionWrapper}>
          <Link className={clsx('button button--primary', styles.actionBtn)} to={link}>
            {buttonText}
            <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} aria-label="Pilar Utama Sumber Belajar">
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
