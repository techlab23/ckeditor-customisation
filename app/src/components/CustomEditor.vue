<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ckeditor
          ref="editor"
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
          @ready="onReady"
          style="height: 100vh"
        ></ckeditor>
        <button @click="generate" class="btn btn-sm btn-dark mt-4">
          Generate
        </button>
      </div>
      <div class="col-12">
        <div class="mt-4" contenteditable="true">{{ editorOutput }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
// import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor";
require("../lib/ckeditor").DecoupledEditor;
import { data } from "@/data";

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: DecoupledEditor,
      editorData: "hello",
      editorOutput: "",
      editorConfig: {
        language: "de",
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph"
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1"
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2"
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3"
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4"
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5"
            }
          ]
        },
        fontSize: {
          options: [
            {
              model: "tiny",
              title: "winzig",
              view: { name: "span", classes: ["text-tiny"] }
            },
            {
              model: "small",
              title: "klein",
              view: { name: "span", classes: ["text-small"] }
            },
            {
              model: "default",
              title: "normal",
              view: { name: "span", classes: ["text-default"] }
            },
            {
              model: "big",
              title: "groß",
              view: { name: "span", classes: ["text-big"] }
            },
            {
              model: "huge",
              title: "enorm",
              view: { name: "span", classes: ["text-huge"] }
            }
          ]
        },
        toolbar: {
          items: [
            "heading",
            "|",
            "fontFamily",
            "fontSize",
            "fontColor",
            "|",
            "bold",
            "underline"
          ]
        }
      }
    };
  },

  created() {
    this.editorData = data;
  },
  methods: {
    generate() {
      this.editorOutput = this.$refs.editor.value;
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
  }
};
</script>
