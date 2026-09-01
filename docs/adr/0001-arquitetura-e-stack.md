---
sidebar_position: 2
---

# ADR 0001 — Stack e Arquitetura de Alto Nível

- **Status:** Aceito
- **Data:** 2026-09-01
- **Decisores:** TheSirLeaf

## Contexto

O *Existentia* é um sistema de RPG completo (mundo, regras, ferramentas para
mestre/jogadores), escrito do zero com alta ênfase em **evitar retrabalho**,
**qualidade** e **automação**. Precisa servir múltiplos clientes (Web, Desktop,
Mobile) além de uma API, e separar claramente o conteúdo de jogo (lore) da
documentação técnica.

## Decisão

1. **Linguagem/plataforma:** C# / .NET.
2. **Backend/API:** ASP.NET Core Web API (REST) — a **prioridade #1**; é a única
   peça da qual todos os clientes e o próprio jogo dependem.
3. **Web:** **Blazor** — mantém C# de ponta a ponta, minimizando retrabalho e
   context-switching (vs. React+TS).
4. **Desktop:** **Avalonia UI** (cross-platform, XAML/MVVM, compartilha lógica .NET).
5. **Mobile:** **.NET MAUI** (C#, compartilha lógica de domínio).
6. **Banco:** a definir no ER (SQLite para dev/local; possível SQL Server em produção).
7. **Plataforma:** **GitHub** (community, Actions, CODEOWNERS, Projects, Copilot).
8. **Docs:** **Docusaurus** para documentação de engenharia; **Quartz** para a lore
   (feito para Obsidian) — dois sites, dois públicos.

## Consequências

- **Positivas:** uma só língua (C#) em todo o código; domínio reutilizável por
  todos os clientes; separação clara entre código/lore/docs.
- **Negativas:** ecossistema de componentes do Blazor menor que React; load inicial
  do WASM mais lento (aceitável — jogo para poucos jogadores); monorepo pode ter
  build de CI mais lento (mitigado com CI paralelo por projeto/cache).
- **Trade-offs aceitos:** Blazor prioriza coesão/retrabalho sobre maturidade de
  mercado do frontend.
