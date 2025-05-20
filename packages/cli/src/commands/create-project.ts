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
    console.log(chalk.green("\nProject copied!\n"));
    const gitignorePath = path.join(targetDir, "_gitignore");
    const targetGitignorePath = path.join(targetDir, ".gitignore");
    if (await fs.pathExists(gitignorePath)) {
      await fs.rename(gitignorePath, targetGitignorePath);
    }
    console.log(chalk.green("\Ignore files created!\n"));
    console.log(chalk.green("\Installing dependencies...\n"));
    execSync("npm install", { cwd: targetDir, stdio: "inherit" });
    console.log(chalk.green("\Dependencies installed!\n"));
    console.log(chalk.green("\Creating git repository...\n"));
    execSync("git init", { cwd: targetDir, stdio: "inherit" });
    console.log(chalk.green("\Git repository created!\n"));
    console.log(chalk.green("\Preparing husky...\n"));
    execSync("npx husky init .husky/pre-commit 'npx lint-staged'", { cwd: targetDir, stdio: "inherit" });
    console.log(chalk.green("\Husky prepared!\n"));
    console.log(chalk.green("\nUpdating pre-commit file...\n"));
    const huskyPreCommitPath = path.join(targetDir, ".husky", "pre-commit");
    await fs.writeFile(huskyPreCommitPath, "\nnpx --no-install lint-staged\n", {
      encoding: "utf8",
    });
    await fs.chmod(huskyPreCommitPath, 0o755);
    console.log(chalk.green("pre-commit file updated!\n"));
    console.log(chalk.green("\Doing the firs commit...\n"));
    execSync("git add .", { cwd: targetDir, stdio: "inherit" });
    execSync("git commit -m 'First commit'", { cwd: targetDir, stdio: "inherit" });
    console.log(chalk.green("\First commit done!\n"));
    console.log(chalk.green("\nProject ready!\n"));
    console.log(chalk.green(`\ncd ${projectName}\n`));
    console.log(chalk.green(`\nnpm run dev\n`));
    console.log(chalk.green(`\nHappy coding!\n`));
  } catch (error) {
    console.error(chalk.red("Error creating project:"), error instanceof Error ? error.message : error);
  }
}