define( ['react','jsx!ui/canvas','jsx!ui/canvas-toolbar','services/ImageUtils'], function( React,Canvas,CanvasToolbar,ImgUtils ){

    var image;


    function Layout(){
        console.log("Creating layout")

        this.MainView =  React.createClass({

            getInitialState: function(){
                return {
                    image: new Image()
                }
            },

            loadImage: function ( src ){
                var _self = this;
                this.state.image.src = src;
                // this.state.image.onload = function(){
                //     console.log("Image loaded ");
                //     _self.setState( {
                //         image: image
                //     })

                // }
            },


            componentDidMount: function(){
                console.log("Load image: ", this.props.src);
                this.loadImage( this.props.src );
            },

            makeGreyscale: function(){
                console.log("Ref canvas = " , React.findDOMNode(this.refs.wrapper).attributes );
                var attrs = React.findDOMNode(this.refs.wrapper).attributes;
                console.log("Canvas Id = " , attrs.getNamedItem( 'data-canvas-id').value );
                console.log("Canvas = " , document.getElementById( attrs.getNamedItem( 'data-canvas-id').value ))

                var ctx = document.getElementById( attrs.getNamedItem( 'data-canvas-id').value ).getContext( '2d' );
                console.log("Greyscale!!", ctx, ImgUtils);
                
            },

            render: function(){
                return (
                    <div ref="wrapper" data-canvas-id={this.props['canvas-id']} >
                        <CanvasToolbar makeImageGrey={this.makeGreyscale}/>
                        <Canvas id={this.props['canvas-id']} width="600" height="400" ref="canvas" image={this.state.image}/>
                    </div>
                )
            }
        });
    }

    Layout.prototype.init = function(){
        React.render( (
            <this.MainView canvas-id="canvas" src="images/landscape1.jpg"/>
        ), document.body );
    }

    return Layout;
})
