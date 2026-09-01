---
sidebar_position: 3
---

# ADR 0002 — Estrutura de Repositórios

- **Status:** Aceito
- **Data:** 2026-09-01
- **Decisores:** TheSirLeaf

## Contexto

Definir como organizar o código, a lore e a documentação técnica em repositórios,
visando **evitar retrabalho** e manter cada repo com propósito claro e
permissões/CODEOWNERS independentes.

## Decisão

Adotar **monorepo para o código** e **repos separados para conteúdo não-código**:

| Repositório | Conteúdo | Privado |
|---|---|---|
| `Existentia` | Monorepo .NET (Domain, Application, Infrastructure, Api, Web, Desktop, Mobile, tests, CI, CODEOWNERS) | Sim |
| `Existentia.Lore` | Vault Obsidian — mundo, regras, material do mestre (publicação futura: Quartz) | Sim |
| `Existentia.Docs` | Docusaurus — RFs, RNFs, RNs, UCs, ADRs, ER | Sim |

Nomenclatura em **Pascal.Dot**, consistente com o ecossistema .NET.

### Por que monorepo no código

- Blazor/Avalonia/MAUI compartilham `Domain` e `Application` na mesma solution.
- Em multi-repo seria necessário publicar pacotes NuGet do domínio (fricção).
- Uma solution, um CI de build/test, refatorações atômicas entre camadas.

### Por que separar lore/docs do código

- Docusaurus e Quartz são código Node/estático, sem relação com a solution .NET.
- A lore (privada do mestre) nunca deve morar no mesmo repo que o código.
- Resolve o problema de "menu lateral poluído" (dois sites, dois públicos).

## Consequências

- **Positivas:** clareza de propósito por repo; permissões/CODEOWNERS independentes;
  retrabalho minimizado pela coesão do monorepo.
- **Negativas:** monorepo .NET pode ter build de CI mais lento (mitigar com jobs
  paralelos por projeto + cache).

## Links

- [ADR 0001 — Stack e Arquitetura](arquitetura-e-stack)
