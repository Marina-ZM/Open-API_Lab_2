import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/Open-API_Lab_2",
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/about", "docs/installation", "docs/authorization"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/about" }],
  apis: {
    type: "file",
    input: "./apis/openapi.json",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
