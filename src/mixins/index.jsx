
import React from 'react';

export default function (TargetComponent){
        return class Mixin extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    mixinMsg:"I'm from Mixin~",
                    alertMixinMsg : () => {
                        alert(this.state.mixinMsg)
                    }
                }
            }

            render(){
                return (
                    <div>
                        {/* MixinComponent */}
                        {/* 将自身state下的属性混入到 TargetComponent 的 props中 */}
                        <TargetComponent {...this.props} {...this.state}/>
                    </div>
                )              
            }
        }
}