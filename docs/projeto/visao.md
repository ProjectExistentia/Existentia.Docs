---
sidebar_position: 1
---

# Visão

O **Existentia** é um sistema de RPG completo (mundo, regras e ferramentas para
mestre e jogadores), construído do zero sobre uma plataforma corporativa robusta,
com alta ênfase em **evitar retrabalho**, **qualidade de desenvolvimento** e
**automação**.

## Objetivo

Entregar o jogo e suas ferramentas em múltiplos clientes — Web, Desktop e Mobile —
servidos por uma **API REST** central que é a única peça da qual todos os clientes
e o próprio jogo dependem.

## Público da documentação

Esta documentação de **engenharia** cobre requisitos (RF/RNF/RN), casos de uso (UC),
modelo de entidades (ER) e decisões de arquitetura (ADRs). O conteúdo do mundo
(lore) vive no `Existentia.Lore`.

## Princípios

- **Uma só linguagem (C#/.NET)** em todo o código — minimiza retrabalho e
  context-switching.
- **Domínio reutilizável** por todos os clientes.
- **Automação de ponta a ponta** — docência de API via OpenAPI, diagramas via
  Mermaid/PlantUML, deploy via GitHub Actions.
- **Disciplina de processo** — trunk-based, PRs, review e Conventional Commits.
