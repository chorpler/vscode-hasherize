import * as vscode from "vscode";
import { logger } from "./logger";

export type RenderOutputType = "output" | "editor";

export const renderOutput = (type: RenderOutputType) => (data: string) => {
  if (type === "editor") {
    vscode.workspace
      .openTextDocument({ content: data, language: "json" })
      .then((doc) =>
        vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside),
      );
  } else {
    logger.clear();
    logger.append(data);
    logger.show(true);
  }
};

export const renderError = (data: string) => {
  logger.clear();
  logger.append(data);
  logger.show(true);
  return vscode.window.showErrorMessage(data);
};
