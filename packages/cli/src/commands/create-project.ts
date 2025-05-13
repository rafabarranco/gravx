import fs from "fs-extra";
import path, { dirname, resolve } from "path";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Ruta al template desde la raíz del proyecto (evita usar dist)
const templateDir = resolve(__dirname, "../../gravx-template");

/**
 * Crea un nuevo proyecto copiando una plantilla y ejecutando `npm install`.
 * 
 * @param projectName Nombre del nuevo proyecto
 */
export async function createProject(projectName: string): Promise<void> {
  const targetDir = path.resolve(process.cwd(), projectName);

  try {
    console.log(chalk.cyan(`\nCreating project '${projectName}'...`));

    await fs.copy(templateDir, targetDir);

    const gitignorePath = path.join(targetDir, "_gitignore");
    const targetGitignorePath = path.join(targetDir, ".gitignore");

    if (await fs.pathExists(gitignorePath)) {
      await fs.rename(gitignorePath, targetGitignorePath);
    }

    execSync("npm install", { cwd: targetDir, stdio: "inherit" });

    console.log(chalk.green("\nProject ready!\n"));
  } catch (error) {
    console.error(chalk.red("Error creating project:"), error instanceof Error ? error.message : error);
  }
}