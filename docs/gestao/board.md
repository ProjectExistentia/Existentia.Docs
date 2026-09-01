---
sidebar_position: 2
---

# Board de Projetos

O board único centraliza o acompanhamento de issues e pull requests das três
repos ativas da organização: `Existentia`, `Existentia.Docs` e `Existentia.Lore`.

- **URL:** https://github.com/orgs/ProjectExistentia/projects/1

## Campos e opções

| Campo | Opções |
|---|---|
| Status | Backlog, Em andamento, Em revisao, Concluido |
| Prioridade | P0, P1, P2, P3 |
| Area | Docs, Monorepo, Lore |

## Fluxo automatizado

Cada repo ativo tem o workflow `.github/workflows/projects.yml` que move os itens
no board automaticamente:

| Evento | Status resultante |
|---|---|
| Issue aberta | Backlog |
| Issue reaberta | Backlog |
| Issue fechada | Concluido |
| PR aberto/draft reaberto | Em andamento |
| PR marcado ready for review | Em revisao |
| PR fechado/mergeado | Concluido |

O campo **Area** é fixo por repo (Definido pelo workflow). O campo **Prioridade**
é preenchido manualmente pelo dono do projeto.

## Autenticação

O workflow usa um GitHub App (`existentia-projects`) com permissão de leitura e
escrita em projetos da organização e leitura em issues/PRs. As credenciais ficam
em vars/secrets de repositório (`APP_CLIENT_ID` e `APP_PRIVATE_KEY`).

## Views

As views do board são configuradas pela interface do GitHub Projects (layout,
agrupamento e filtros são por usuário e não existem via API). Sugestão: uma view
em formato **Board**, agrupada por **Status**, com filtro `Area` da repo em que
você está trabalhando.