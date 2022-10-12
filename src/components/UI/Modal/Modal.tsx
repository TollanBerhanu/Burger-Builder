import React, { Component } from "react";
import './Modal.scss'
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component { // You can also extend PureComponent, but it will run more checks

    props: any
    
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('Modal component updated!')
    }
    shouldComponentUpdate(nextProps: Readonly<{show: boolean}>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps.show !== this.props.show
    }
    
    render(){
        return (<>
            <div className="Modal"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        </>)
    }
    
}

export default Modal