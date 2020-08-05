
import React from 'react';

export default function (TargetComponent){
        const mixinComponent = class MixinComponent extends TargetComponent{
            constructor(props){
                super(props)
                this.state = {
                    mixinMsg:"这是mixin里的msg"
                }
            }
            alertMixinMsg(){
                alert(this.state.mixinMsg)
            }
            render(){
                // debugger
                return (
                    <div>
                        mixins======
                        {/* Mixin */}

                        <TargetComponent/>
                    </div>
        
                );                
            }
        }
        return mixinComponent

}