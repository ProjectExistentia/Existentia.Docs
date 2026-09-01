---
sidebar_position: 1
---

# Padrão de Artefatos

Este repositório usa artefatos estruturados e versionados para a documentação de
engenharia. Cada tipo de artefato tem um **template** próprio, garantindo
consistência e rastreabilidade.

## Tipos de artefato

| Artefato | Template | Finalidade |
|---|---|---|
| ADR | [template-adr](templates/template-adr) | Decisão de arquitetura (formato MADR) |
| RF | [template-rf](templates/template-rf) | Requisito funcional |
| RNF | [template-rnf](templates/template-rnf) | Requisito não funcional |
| RN | [template-rn](templates/template-rn) | Regra de negócio |
| UC | [template-uc](templates/template-uc) | Caso de uso |
| ER | [template-er](templates/template-er) | Entidade do modelo |

## Convenções

- **Identificação numérica** sequencial por tipo (ex.: `RF-001`, `ADRs` por número).
- **Atributos obrigatórios** (status, ids, vínculos) definidos em cada template.
- **Vínculos explícitos** entre artefatos (RF ↔ UC ↔ ER) para rastreabilidade.
- **Fonte canônica:** o domínio do RPG vive no `Existentia.Lore`; estes artefatos
  detalham a implementação técnica.
