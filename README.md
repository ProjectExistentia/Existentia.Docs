# Existentia.Docs

Documentação técnica do sistema de RPG *Existentia*, publicada em **Docusaurus** (site estático).

> **Propósito:** documentação de engenharia e produto (não é a lore do mundo, que vive em `Existentia.Lore` via Obsidian/Quartz).

## Artefatos de documentação

| Sigla | Significado | Diretório |
|---|---|---|
| **RF** | Requisito Funcional | `docs/rf/` |
| **RNF** | Requisito Não-Funcional | `docs/rnf/` |
| **RN** | Regra de Negócio | `docs/rn/` |
| **UC** | Caso de Uso | `docs/uc/` |
| **ER** | Esquema Entidade-Relacionamento | `docs/er/` |
| **ADR** | Architectural Decision Record | `docs/adr/` *(mantidos no monorepo junto ao código)* |

> **Nota sobre ADRs:** as ADRs do sistema são mantidas no repositório de **código** (`Existentia/docs/ADR/`), pois documentam decisões de código revisadas nos PRs — prática comum e que evita desalinhamento. Este repo (Docusaurus) concentra os artefatos de produto/engenharia publicáveis (RFs, RNFs, RNs, UCs, ER).

## Stack

- **Site:** Docusaurus (React) — *scaffold na Fase 2*
- **Deploy:** a definir (Netlify/Vercel/GitHub Pages)

## Estrutura local de trabalho

```
Existentia.Docs/
  docs/            # conteúdo markdown (rf, rnf, rn, uc, er)
  ...docusaurus config (gerado na Fase 2)
```
