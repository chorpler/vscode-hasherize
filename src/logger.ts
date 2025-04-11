import * as vscode from "vscode";

export const logger = vscode.window.createOutputChannel("hasherize");
// export const Debug = vscode.window.createOutputChannel("jqpg debug");
export const debugLogger = logger;

export const log = (message: string) => {
  logger.appendLine(message);
};
export const logError = (message: string) => {
  logger.appendLine(message);
  logger.show(true);
  vscode.window.showErrorMessage(message);
};
export const logWarning = (message: string) => {
  logger.appendLine(message);
  logger.show(true);
  vscode.window.showWarningMessage(message);
};
export const logDebug = (message: string) => {
  debugLogger.appendLine(message);
  debugLogger.show(true);
};
export const Log = {
  l: log,
  log: log,
  i: log,
  info: log,
  e: logError,
  error: logError,
  w: logWarning,
  warn: logWarning,
  d: logDebug,
  debug: logDebug,
};

export default Log;
