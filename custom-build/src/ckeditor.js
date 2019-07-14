/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  Essentials,
  Heading,
  FontSize,
  FontFamily,
  FontColor,
  Bold,
  Underline
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontsize",
      "fontfamily",
      "fontColor",
      "|",
      "bold",
      "underline"
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "de"
};
