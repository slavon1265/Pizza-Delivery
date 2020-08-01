import React from 'react';

class Button extends React.Component{
    componentDidMount(){
        console.log('hello i insalled button')
    }

    render(){
        return (
            <div>
                <button>
                    Click Me!
                </button>
            </div>   
        )
    }
}

export default Button;