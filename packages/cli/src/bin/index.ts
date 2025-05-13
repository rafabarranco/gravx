#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "../commands/create-project.js";
import { createEntity } from "../commands/create-entity.js";

const program = new Command();

program
  .name("gravx")
  .description("CLI for Gravx UI + project tooling")
  .version("1.0.0");

program
  .command("create-project")
  .argument("<project-name>")
  .description("Create a new React project")
  .action(async (name: string) => {
    await createProject(name);
  });

program
  .command("create-entity")
  .argument("<entity-name>")
  .option("--with-hook")
  .option("--with-store")
  .description("Create a new entity")
  .action(async (name: string, options: { withHook?: boolean; withStore?: boolean }) => {
    await createEntity(name, options);
  });

program.parse();