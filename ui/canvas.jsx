define( ['react'] , function(React){

    var image,canvas,ctx;

    return React.createClass( {


        componentDidMount: function(){
            canvas = React.findDOMNode(this.refs.canvas);
            ctx = canvas.getContext( '2d' );
            image = this.props.image;
            ctx.drawImage( image, 0,0 );
            console.log("--> ",this.props.image);
            var _self =this;
            this.props.image.onload = function(){
                console.log("LOADED!!");
                ctx.drawImage( _self.props.image , 0,0 );
            }
        },

        render: function(){

            return (
                <div>
                    <p>Canvas</p>
                    <canvas width={this.props.width} height={this.props.height} id={this.props.id} ref="canvas"/>
                </div>
            )
        }
    });
})