import path from "path";
import fs from "fs-extra";
import chalk from "chalk";

interface CreateEntityOptions {
  withHook?: boolean;
  withStore?: boolean;
}

export const createEntity = async (
  name: string,
  options: CreateEntityOptions
): Promise<void> => {
  const baseDir = path.resolve(process.cwd(), "src", name);

  const files = [
    {
      name: "screen.tsx",
      content: `export const ${name}Screen = () => <div>${name} screen</div>;`,
    },
    {
      name: "types.ts",
      content: `export interface ${name}Props {}`,
    },
    {
      name: "styles.ts",
      content: `// Estilos para ${name}`,
    },
  ];

  if (options.withHook) {
    files.push({
      name: "hooks.ts",
      content: `export const use${name} = () => {};`,
    });
  }

  if (options.withStore) {
    files.push({
      name: "store.ts",
      content: `// Store para ${name}`,
    });
    files.push({
      name: "state.ts",
      content: `// State para ${name}`,
    });
  }

  for (const file of files) {
    const filePath = path.join(baseDir, file.name);
    await fs.ensureFile(filePath);
    await fs.writeFile(filePath, file.content);
    console.log(chalk.green(`✔ Created: ${filePath}`));
  }
};