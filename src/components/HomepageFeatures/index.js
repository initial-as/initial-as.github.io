import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Bahan Ajar',
    Svg: require('@site/static/img/bahan-ajar.svg').default,
    description: (
      <>
        Materi pembelajaran yang disusun untuk membantu mahasiswa memahami berbagai konsep teknologi informasi secara terstruktur dan mudah dipahami.<br />
      </>
    ),
    link: '/docs/bahan-ajar/intro', // Internal path or external URL
    buttonText: 'Baca Bahan Ajar', // Text for the button
  },
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
        Panduan praktis dan langkah demi langkah untuk mempelajari, mencoba, dan menerapkan berbagai teknologi melalui eksperimen dan proyek sederhana.<br />
      </>
    ),
    link: '/docs/tutorial/intro',
    buttonText: 'Baca Tutorial',
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Catatan pribadi tentang berbagai hal yang saya pelajari, kerjakan, dan temukan dalam perjalanan mengajar, meneliti, dan mengeksplorasi teknologi.<br />
      </>
    ),
    link: '/blog',
    buttonText: 'Baca Blog',
  },
];

function Feature({ Svg, title, description, link, buttonText }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && buttonText && (
          <div className={styles.buttons}>
            <Link
              className="button button--primary"
              to={link}>
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
