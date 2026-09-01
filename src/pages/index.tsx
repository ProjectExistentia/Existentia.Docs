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
            to="/docs/projeto/visao">
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
    title: 'Projeto',
    to: '/docs/projeto/visao',
    description: 'Visão, escopo e diagramas de contexto do Existentia.',
  },
  {
    title: 'Requisitos',
    to: '/docs/requisitos/RF',
    description: 'Requisitos funcionais (RF), não funcionais (RNF), regras de negócio (RN) e casos de uso (UC).',
  },
  {
    title: 'Modelagem',
    to: '/docs/modelagem/ER',
    description: 'Modelo entidade-relacionamento (ER) e diagramas de domínio.',
  },
  {
    title: 'Desenvolvimento',
    to: '/docs/desenvolvimento/ADR',
    description: 'Decisões de arquitetura (ADRs) e guias de desenvolvimento.',
  },
  {
    title: 'Gestão',
    to: '/docs/gestao/artefatos',
    description: 'Padrão de artefatos e templates (ADR, RF, RNF, RN, UC, ER).',
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
