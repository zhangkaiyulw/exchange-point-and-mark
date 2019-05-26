import { commands, Selection, ExtensionContext, TextEditor } from 'vscode';

export function activate(context: ExtensionContext) {

  let disposable = commands.registerTextEditorCommand(
    'exchangePointAndMark',
    (editor: TextEditor) => {
      editor.selections = editor.selections.map((sel) => {
        return new Selection(sel.active, sel.anchor);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
