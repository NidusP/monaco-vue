import * as monaco from 'monaco-editor';
import { format } from 'sql-formatter';

function init() {
  // define a document formatting provider
  // then you contextmenu will add an "Format Document" action
  monaco.languages.registerDocumentFormattingEditProvider('sql', {
    provideDocumentFormattingEdits(model, options) {
      var formatted = format(model.getValue(), {
        // indent: ' '.repeat(options.tabSize)
        tabWidth: 2,
        useTabs: true,
        language: 'sqlite',
      });
      return [
        {
          range: model.getFullModelRange(),
          text: formatted,
        },
      ];
    },
  });

  // define a range formatting provider
  // select some codes and right click those codes
  // you contextmenu will have an "Format Selection" action
  monaco.languages.registerDocumentRangeFormattingEditProvider('sql', {
    provideDocumentRangeFormattingEdits(model, range, options) {
      var formatted = format(model.getValueInRange(range), {
        // indent: ' '.repeat(options.tabSize)
      });
      return [
        {
          range: range,
          text: formatted,
        },
      ];
    },
  });

  // // mannually trigger document formatting by:
  // monacoEditor.trigger("editor", "editor.action.formatDocument");

  // // mannully tirgger selection formatting by:
  // monacoEditor.trigger("editor", "editor.action.formatSelection");
}

init();
