import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/jogo/existentia-api",
    },
    {
      type: "category",
      label: "Sistema",
      items: [
        {
          type: "doc",
          id: "api/jogo/get-health",
          label: "Health check",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
