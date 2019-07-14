Vue.use(CKEditor);

Vue.component("custom-editor", {
  template: "#custom-editor-template",
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
    this.editorData = `<h1>This is Heading 1</h1><h2>This is Heading 2</h2><h3>This is Heading 3</h3><h4>This is Heading 4</h4><h5>This is Heading 5</h5><p>&nbsp;</p><p><span class="text-tiny">Tiny Text</span></p><p><span class="text-small">Small Text</span></p><p><span class="text-default">Normal Text</span></p><p><span class="text-big">Big Text</span></p><p><span class="text-huge">Enormous Text</span></p><p><strong>Default colors defined in the &nbsp;editor</strong></p><p><span style="color:hsl(0,0%,0%);">Black</span></p><p><span style="color:hsl(0,0%,30%);">Dim Grey</span></p><p><span style="color:hsl(0,0%,60%);">Grey</span></p><p><span style="color:hsl(0,0%,90%);">Lighter Grey</span></p><p><span style="color:hsl(0,75%,60%);">Red</span></p><p><span style="color:hsl(30,75%,60%);">Orange</span></p><p><span style="color:hsl(60,75%,60%);">Yellow</span></p><p><span style="color:hsl(90,75%,60%);">Light Green</span></p><p><span style="color:hsl(120,75%,60%);">Green</span></p><p><span style="color:hsl(150,75%,60%);">Aquamarine</span></p><p><span style="color:hsl(180,75%,60%);">Turqoise</span></p><p><span style="color:hsl(210,75%,60%);">Light Blue</span></p><p><span style="color:hsl(240,75%,60%);">Blue</span></p><p><span style="color:hsl(270,75%,60%);">Purple</span></p>`;
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
});

new Vue({
  el: "#app"
});


