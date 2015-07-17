// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    paths: {
        react: 'bower_components/react/react-with-addons',
        bootstrap: 'bower_components/react-bootstrap/react-bootstrap',
        JSXTransformer: 'bower_components/react/JSXTransformer',
        jsx: 'bower_components/requirejs-react-jsx/jsx',
        text: 'bower_components/requirejs-text/text',
        services: 'services',
        ui: 'ui',
        bower: 'bower_components'
    },

    shim : {
        "react": { "exports": "React" },
        "JSXTransformer": "JSXTransformer"
    },

    config: {
        jsx: {
            fileExtension: '.jsx',
            transformOptions:{
                harmony: true,
                stripTypes: false,
                inlineSourceMap: true
            },
            usePragma: false
        }
    }

});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);