define( ['react','bootstrap'], function(React,Bootstrap){
    console.log("HHHEHEHEH")
    return React.createClass({
        
        makeImageGrey: function(e){
            e.preventDefault();
            this.props.makeImageGrey( {} );
            return;
        },

        render: function(){
            return (
                <Bootstrap.Button onClick={this.makeImageGrey}>Shadow</Bootstrap.Button>
            )
        }
    })


})