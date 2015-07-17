/*
Require Test, get elements by ID and cache the results.
 */
define( [ 'bower/ramda/dist/ramda' ] , function( _ ){
    console.debug("Including ElementCache");
    var cache = {};

    function getElementById( id ){
        if( _.has( id, cache ) ) return cache[id];

        var element = document.getElementById( id );
        if( element ) cache[id] = element;
        console.debug( id , " not found caching -> ", cache );
        return element;
    }

    return {
        get: getElementById
    }

})