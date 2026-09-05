import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';

type FrontMatter = {
  codigo?: string;
  slug?: string;
  description?: string;
  prioridade?: string;
  status?: string;
};

type Requisito = {
  type: string;
  dirRel: string;
  file: string;
  base: string;
  frontMatter: FrontMatter;
};

type Row = {
  codigo: string;
  resumo: string;
  prioridade?: string;
  status?: string;
  href: string;
};

function inferCodigo(base: string): string {
  const match = base.match(/^[A-Za-z]+-\d+/);
  return match?.[0] ?? base;
}

function sortByCodigo(a: string, b: string): number {
  const toNumber = (value: string) => Number(value.replace(/\D/g, '') || 0);
  const numericDiff = toNumber(a) - toNumber(b);
  return numericDiff !== 0 ? numericDiff : a.localeCompare(b);
}

export default function RequisitosTable({type}: {type: string}): React.ReactElement {
  const data = usePluginData('existentia-requisitos', 'default') as
    | {items?: Requisito[]}
    | undefined;
  const items = (data?.items ?? []).filter((item) => item.type === type);

  const hasPrioridade = items.some((item) => item.frontMatter.prioridade);

  const rows: Row[] = items
    .map((item) => {
      const {frontMatter, base, dirRel} = item;
      return {
        codigo: frontMatter.codigo ?? inferCodigo(base),
        resumo: frontMatter.description ?? '—',
        prioridade: frontMatter.prioridade,
        status: frontMatter.status,
        href: `/docs/${dirRel}/${frontMatter.slug ?? base}`,
      };
    })
    .sort((a, b) => sortByCodigo(a.codigo, b.codigo));

  if (rows.length === 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Resumo</th>
            {hasPrioridade && <th>Prioridade</th>}
            <th>Status</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>—</td>
            <td>
              <em>
                Em construção — adicione um arquivo nesta pasta para ele aparecer
                automaticamente aqui.
              </em>
            </td>
            {hasPrioridade && <td>—</td>}
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Resumo</th>
          {hasPrioridade && <th>Prioridade</th>}
          <th>Status</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.codigo}>
            <td>{row.codigo}</td>
            <td>{row.resumo}</td>
            {hasPrioridade && <td>{row.prioridade}</td>}
            <td>{row.status}</td>
            <td>
              <Link to={row.href}>Abrir →</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}