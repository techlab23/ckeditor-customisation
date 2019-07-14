# CKEditor Customisation

This samples show how to customise CKEditor (Decoupled Editor) by creating a custom build of the editor with only required plugins, which are as follows.

- Essentials
- Heading,
- Font (Font Family, Font Size, Font Color),
- Basic-Styles (Bold, Italic, Underline)

By default, CKEditor build contain many plugins which are sometimes not needed but they still make the library size and also the app bundle size bigger. Therefore i created a custom build with only required plugins and created a demo app using the build.

I have also created few useful commands as well that help in streamlined development.

**Important: All of the following commands need to be run from the root folder**

```bash
# Step 1: Install npm dependencies
$ npm run install

# Step 2: Run custom build of ckeditor and copy built library to app
$ npm run build

# Step 3: Serve
# To run front-end application locally, use the following command
$ npm run serve

# Step 4: deploy
# To deploy the front-end application to surge.sh, use the following command.
# Before deployment, please change the deploy url otherwise deployment will fail
$ npm run deploy

```
