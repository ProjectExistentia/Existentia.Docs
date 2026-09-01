# Existentia.Docs

Documentação técnica do sistema de RPG *Existentia*, publicada em **Docusaurus**
(site estático em GitHub Pages).

> **Propósito:** documentação de engenharia e produto (não é a lore do mundo,
> que vive em `Existentia.Lore` via Obsidian/Quartz).

## Estrutura de documentação

A sidebar é gerada automaticamente a partir das pastas abaixo (ordem controlada
por `_category_.yml`; cada subpasta por tipo de artefato):

```
docs/
├── projeto/            Visão, escopo, diagramas de contexto
├── requisitos/         RF, RNF, RN, UC (arquivos-lista na sidebar)
│                       + detalhes em páginas unlisted (acessíveis pela lista)
├── modelagem/          ER (entidades)
├── desenvolvimento/    ADRs (listas) + guias (setup, código, contribuição, ...)
└── gestao/             Padrão de artefatos + templates
```

- **Padrão "guarda-chuva + unlisted":** cada tipo (RF/RNF/RN/UC/ER/ADR) tem um
  arquivo-lista na sidebar com resumo das decisões; as páginas individuais usam
  `unlisted: true` (não aparecem na sidebar, só são acessíveis pela lista).
- **ADRs:** mantidos neste repo (`docs/desenvolvimento/ADR/`), seguindo MADR.

## Desenvolvimento

```powershell
npm install
npm run start      # dev server
npm run build      # build de produção (valida links quebrados)
npm run typecheck  # checagem de tipos
npm run gen-api-docs jogo  # regenera docs da API a partir de openapi/jogo.yaml
```

## Deploy

GitHub Pages via GitHub Actions (push em `docs/` ou `main` dispara
`.github/workflows/deploy.yml`). Site: <https://thesirleaf.github.io/Existentia.Docs/>

## Backlog — melhorias futuras (home)

- [ ] **Busca** no site (`docusaurus-search-local` ou Algolia DocSearch)
- [ ] **Últimas atualizações** na home (widget lendo `last_update`/git)
- [ ] **Cards com ícone** nas seções da home
- [ ] **Badge de status** por seção (front matter)