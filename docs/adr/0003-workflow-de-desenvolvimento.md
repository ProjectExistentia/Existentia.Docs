---
sidebar_position: 4
---

# ADR 0003 — Workflow de Desenvolvimento

- **Status:** Aceito
- **Data:** 2026-09-01
- **Decisores:** TheSirLeaf

## Contexto

Trabalho **solo** inicialmente, mas com uma forma de trabalho que receba outros
devs sem atrito. A obsessão é qualidade e automação, então o fluxo deve ser
disciplinado desde o início.

## Decisão

1. **Branch model:** *trunk-based* com PRs curtos. `main` é protegida (**nenhum push
   direto**).
2. **Pull request obrigatório + 1 review aprovado** — mesmo solo (self-review +
   checks de CI; com time, review humano real).
3. **Branch protection em `main`:**
   - Exigir PR
   - Exigir status checks (CI) passando
   - Exigir review de um aprovador
   - Impedir reescrita de histórico (force-push)
4. **CODEOWNERS** por área (Domain/Api/Web/Desktop/Mobile/tests/docs/CI).
5. **Conventional Commits** — mensagens semânticas (`feat`, `fix`, `chore`,
   `docs`, `refactor`, `test`, `ci`...).
6. **GitHub Projects (Kanban)** automatizado — issues/PRs movem por status.
7. **CI/CD:** GitHub Actions — build, testes e análise em todo PR/push na `main`.

## Consequências

- **Positivas:** padrões de qualidade desde o dia 1; onboarding trivial; histórico
  limpo e rastreável.
- **Negativas (aceitas):** processo de PR+review adiciona overhead mesmo solo — em
  troca de disciplina e prontidão para time.

## Links

- [ADR 0002 — Estrutura de Repositórios](estrutura-de-repositorios)
