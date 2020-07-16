import React, { Component } from 'react'
import '../css/title.css'
import triange from '../artwork/website_8-01.svg';

export default class Title extends Component {

    state = {
        titlescale: 0.0,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const titlescale = winScroll / height;

        this.setState({
            titlescale,
        })
    }

    render() {
        return (
            <div className="page_1">
                <div className="page_center">
                    <h1 style={{ transform: `translate(0px, ${-(this.state.titlescale * (20 * Math.pow(2, this.state.titlescale * 40)))}px)`, opacity: 1 - this.state.titlescale * 6, }} className="title_text">
                        <span className="text_plain">Website </span>
                        <span className="text_gradient">Eight</span>
                    </h1>
                </div>
                <div className="scroll_arrow"><img style={{
                    opacity: 1 - this.state.titlescale * 2.5,
                    transform: `translate(0px, ${(this.state.titlescale * (10 * Math.pow(2, this.state.titlescale * 20)))}px)`
                }} src={triange} /></div>
            </div>
        )
    }
}
