define( [ "react","jsx!ui/layout",'services/ElementCache'] , function( React,Layout,elements ){

        console.log("Require APP Starting...", React);
        window.React = React;
                    
        elements.get( "Canvas" );
        
        var view = new Layout();
        view.init();
})