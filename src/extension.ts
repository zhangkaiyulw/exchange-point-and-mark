import { commands, window, Selection, ExtensionContext } from 'vscode';

export function activate(context: ExtensionContext) {

  let disposable = commands.registerTextEditorCommand(
    'extension.exchangePointAndMark',
    () => {
      const editor = window.activeTextEditor;
      if (!editor) return;
      editor.selections = editor.selections.map((sel) => {
        return new Selection(sel.active, sel.anchor);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
