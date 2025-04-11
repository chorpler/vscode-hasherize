import {
  window,
  commands,
  ExtensionContext,
  Range,
  TextEditor,
  TextEditorEdit,
  Selection,
} from 'vscode';
import { Log } from "./logger";
import { HashCommand } from './hash-command';
import { Base64EncodeCommand } from './base64-encode-command';
import { Base64DecodeCommand } from './base64-decode-command';
import { Base64UrlEncodeCommand } from './base64url-encode-command';
import { Base64UrlDecodeCommand } from './base64url-decode-command';
import { UriEncodeComponentCommand } from './uri-encode-component-command';
import { UriDecodeComponentCommand } from './uri-decode-component-command';
import { UuidV1Command } from './uuid-v1-command';
import { UuidV4Command } from './uuid-v4-command';
import { HtmlEntityEncodeCommand } from './html-entity-encode-command';
import { HtmlEntityDecodeCommand } from './html-entity-decode-command';

export function activate(context: ExtensionContext) {
  Log.l('hasherize: activate');
  context.subscriptions.push(
    commands.registerCommand('hasherize.md5', async () => {
      Log.l('hasherize: md5 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let md5 = new HashCommand('md5');
        await replaceText(editor, selected.range, md5.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.sha1', async () => {
      Log.l('hasherize: sha1 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let sha1 = new HashCommand('sha1');
        await replaceText(editor, selected.range, sha1.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.sha256', async () => {
      Log.l('hasherize: sha256 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let sha1 = new HashCommand('sha256');
        await replaceText(editor, selected.range, sha1.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.sha512', async () => {
      Log.l('hasherize: sha512 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let sha1 = new HashCommand('sha512');
        await replaceText(editor, selected.range, sha1.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.base64Encode', async () => {
      Log.l('hasherize: base64Encode run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let base64Encode = new Base64EncodeCommand();
        await replaceText(editor, selected.range, base64Encode.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.base64Decode', async () => {
      Log.l('hasherize: base64Decode run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let base64Decode = new Base64DecodeCommand();
        await replaceText(editor, selected.range, base64Decode.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.base64UrlEncode', async () => {
      Log.l('hasherize: base64UrlEncode run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let base64Encode = new Base64UrlEncodeCommand();
        await replaceText(editor, selected.range, base64Encode.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.base64UrlDecode', async () => {
      Log.l('hasherize: base64UrlDecode run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let base64Decode = new Base64UrlDecodeCommand();
        await replaceText(editor, selected.range, base64Decode.run(selected.text));
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.uriEncodeComponent', async () => {
      Log.l('hasherize: uriEncodeComponent run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      let uriEncodeComponent = new UriEncodeComponentCommand();
      for(let selected of selecteds) {
        await replaceText(
          editor,
          selected.range,
          uriEncodeComponent.run(selected.text)
        );
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.uriDecodeComponent', async () => {
      Log.l('hasherize: uriDecodeComponent run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let uriDecodeComponent = new UriDecodeComponentCommand();
        await replaceText(
          editor,
          selected.range,
          uriDecodeComponent.run(selected.text)
        );
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.uuidV1', async () => {
      Log.l('hasherize: uuidV1 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let uuidV1Command = new UuidV1Command();
        await insertText(editor, selected.range, uuidV1Command.run());
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.uuidV4', async () => {
      Log.l('hasherize: uuidV4 run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let uuidV4Command = new UuidV4Command();
        await insertText(editor, selected.range, uuidV4Command.run());
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.htmlEntityEncodeComponent', async () => {
      Log.l('hasherize: htmlEntityEncodeComponent run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let htmlEntityEncodeComponent = new HtmlEntityEncodeCommand();
        await replaceText(
          editor,
          selected.range,
          htmlEntityEncodeComponent.run(selected.text)
        );
      }
    })
  );

  context.subscriptions.push(
    commands.registerCommand('hasherize.htmlEntityDecodeComponent', async () => {
      Log.l('hasherize: htmlEntityDecodeComponent run');
      let editor = window.activeTextEditor;
      if (editor === null || editor === undefined) { return; }
      let selecteds = getSelectedTextAndRanges(editor);
      for(let selected of selecteds) {
        let htmlEntityDecodeComponent = new HtmlEntityDecodeCommand();
        await replaceText(
          editor,
          selected.range,
          htmlEntityDecodeComponent.run(selected.text)
        );
      }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() { }

export interface TextAndRange {
  text: string;
  range: Range;
}
export type TextAndRanges = TextAndRange[];

/**
 * Get selected text and range
 *
 * @param {TextEditor} editor
 */
function getSelectedTextAndRanges(editor: TextEditor): TextAndRanges {
  let out:TextAndRanges = [];
  if (editor == null) { return out; }
  let selections = editor.selections;
  for(let selection of selections) {
    let range: Range;
    if (!hasSelectedText(selection)) {
      let r = editor.document.getWordRangeAtPosition(selection.active);
      if(r != null) {
        range = r;
      } else {
        range = new Range(selection.start, selection.end);
      }
    } else {
      range = new Range(selection.start, selection.end);
    }
    let text = editor.document.getText(range);
    let textAndRange: TextAndRange = {
      text: text,
      range: range,
    };
    out.push(textAndRange);
  }


  return out;
}

/**
 * Check if selection has selected text or just a cursor
 *
 * @param {Selection} selection
 * @return {boolean} true if not a cursor
 */
function hasSelectedText(selection: Selection) {
  return selection.start.character !== selection.end.character;
}

/**
 * Replace text in editor
 *
 * @param {TextEditor} editor
 * @param {Range} range
 * @param {string} newText - new text to replace
 */
async function replaceText(editor: TextEditor, range: Range, newText: string) {
  return editor.edit((editBuilder: TextEditorEdit) => {
    Log.l(`replaceText: ${range.start.line},${range.start.character} - ${range.end.line},${range.end.character} : ${newText}`);
    editBuilder.replace(range, newText);
  }).then(success => {
    if (success) {
      Log.l('replaceText: success');
      // editor.selection = new Selection(pos1, pos1);
    } else {
      Log.l('replaceText: success false, whaaaaaaat');
    }
}).then(undefined, err => {
  Log.l('replaceText: error');
  Log.l(err);
    // console.error(err);
});
}

/**
 * Insert text in editor
 */
async function insertText(editor: TextEditor, range: Range, text: string) {
  // let selections = editor.selections;
  // for(let selection of selections) {
  //   const position = selection.active;
  //   editor.edit(function (editBuilder) {
  //     editBuilder.insert(position, text);
  //   });
  // }
  return editor.edit((editBuilder: TextEditorEdit) => {
    Log.l(`insertText: ${text}`);
    let pos = range.start;
    editBuilder.insert(pos, text);
  }).then(success => {
    if (success) {
      Log.l('insertText: success');
      // editor.selection = new Selection(pos1, pos1);
    } else {
      Log.l('insertText: success false, whaaaaaaat');
    }
  }).then(undefined, err => {
    Log.l('insertText: error');
    Log.l(err);
  });
}
