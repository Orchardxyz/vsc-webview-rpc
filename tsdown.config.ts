import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  platform: "neutral",
  target: "es2022",
  minify: false,
  plugins: [
    {
      name: "empty-entry-sourcemaps",
      generateBundle(_options, bundle) {
        for (const output of Object.values(bundle)) {
          if (output.type !== "chunk" || (!output.fileName.endsWith(".js") && !output.fileName.endsWith(".cjs")) || output.map) {
            continue;
          }

          const mapFileName = `${output.fileName}.map`;
          const sourceMapReference = mapFileName.slice(mapFileName.lastIndexOf("/") + 1);
          output.code += `//# sourceMappingURL=${sourceMapReference}\n`;
          this.emitFile({
            type: "asset",
            fileName: mapFileName,
            source: JSON.stringify({
              version: 3,
              file: output.fileName,
              sources: ["../src/index.ts"],
              sourcesContent: ["export {};\n"],
              names: [],
              mappings: ""
            })
          });
        }
      }
    }
  ]
});
