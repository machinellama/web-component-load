Dynamically load a Web Component running in an external app into any Javascript app. Step-by-step instructions on how to create an Web Component with custom elements can be found here: https://github.com/MachineLlama/multi-app


## GitHub
https://github.com/MachineLlama/web-component-load

## NPM
https://www.npmjs.com/package/web-component-load

## Usage

Assumes your remote app is running and you have access to these web component files. By default, will import 'vendor.js', 'polyfills.js', 'main.js', 'runtime.js', 'styles.js', and 'styles.css'. You can call the load function in this package with a given url and all the files will be appended as scripts (or link for the styles.css file) to the running app's document head section, if that particular script/link doesn't exist already:

    npm install web-component-load --save
    ...
    import { load } from 'web-component-load';
    ...
    load('http://localhost:4200');

Parameters for load function:
  - url: mandatory string: the url where scripts and styles for your Web Components can be found
  - options: optional object
    - scripts: an array of script file names (as strings) to load instead of the defaults mentioned above; for example: ['vendor.js', 'polyfills.js']
    - styles: an array of style file names (as strings) to load instead of the default mentioned above; for example: ['styles.css', 'otherStyles.css']

## License
none