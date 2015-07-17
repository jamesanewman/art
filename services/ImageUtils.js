


define([ 'bower_components/ramda/dist/ramda.js'], function( R ){
   var makeRGB = R.splitEvery(4),
    greenToGrey = R.multiply(0.6),
    redToGrey = R.multiply(0.3),
    blueToGrey = R.multiply(0.11),
    rgbToGrey = R.map( function( rgb ){
        //console.log("RGB->",rgb)
        var grey = (redToGrey(rgb[0]) + greenToGrey(rgb[1]) + blueToGrey(rgb[2]) ) / 3; 
        return [ grey,grey,grey, /*alpha*/rgb[3] ];
    })
    rgbToGreyArray = R.compose( R.unnest, rgbToGrey, makeRGB );

    function grey1(){
        greyArray = rgbToGreyArray( imgData.data );
        console.log( greyArray );
        var ID = new ImageData(Uint8ClampedArray.from(greyArray),width,height);
        ctx.putImageData( ID ,0 ,0)
    }

    function extractGreyscale(){

        var width=canvas.width,
            height=canvas.height,
            imgData = ctx.getImageData(0,0,width,height);

        if(true){
            greyArray = rgbToGreyArray( imgData.data );
            console.log( greyArray );
            var ID = new ImageData(Uint8ClampedArray.from(greyArray),width,height);
            ctx.putImageData( ID ,0 ,0)
        } else {
            var row=0,rowHeight=5;
            while( row<height ){
                var rowData=ctx.getImageData(0,row,width,rowHeight);
                var greyArray = rgbToGreyArray( rowData.data );
                //console.log("Row=",rowData);
                var ID = new ImageData(Uint8ClampedArray.from(greyArray),width,rowHeight);
                ctx.putImageData( ID ,0 ,row)
                row+=rowHeight;
            }
        }
        //singlePoint()
    }

    // Turn some RGB Image data into greyscale
    function makeGrey( imgData, width, height ){
        greyArray = rgbToGreyArray( imgData.data );
        return imgData;
    } 

    return {
        makeGrey: makeGrey
    }
});

