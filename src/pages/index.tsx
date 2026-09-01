import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/visao">
            Visão do projeto
          </Link>
        </div>
      </div>
    </header>
  );
}

type Section = {
  title: string;
  to: string;
  description: ReactNode;
};

const Sections: Section[] = [
  {
    title: 'Visão',
    to: '/docs/visao',
    description: 'Objetivo, escopo e contexto do Existentia.',
  },
  {
    title: 'Requisitos',
    to: '/docs/rf',
    description: 'Requisitos funcionais (RF), não funcionais (RNF) e regras de negócio (RN).',
  },
  {
    title: 'Casos de uso',
    to: '/docs/uc',
    description: 'Modelagem de casos de uso (UC) do sistema.',
  },
  {
    title: 'Modelo de entidades',
    to: '/docs/er',
    description: 'Modelo entidade-relacionamento (ER) e diagramas.',
  },
  {
    title: 'ADRs',
    to: '/docs/adr',
    description: 'Architecture Decision Records do projeto.',
  },
  {
    title: 'API',
    to: '/docs/api/jogo/existentia-api',
    description: 'Documentação OpenAPI da API REST do jogo.',
  },
];

function SectionCard({title, to, description}: Section) {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card">
        <div className="card__body">
          <Heading as="h3">
            <Link to={to}>{title}</Link>
          </Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Documentação`}
      description="Documentação de engenharia do projeto Existentia">
      <HomepageHeader />
      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              {Sections.map((s, idx) => (
                <SectionCard key={idx} {...s} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
