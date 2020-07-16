import React, { Component } from 'react'
import '../../css/page3.css';
import ScrollTrigger from 'react-scroll-trigger';

import triangle from '../../artwork/website_8-01.svg';
import square from '../../artwork/website_8-02.svg';
import circle from '../../artwork/website_8-03.svg';

class Page3Item extends Component {

    state = {
        visible: false,
    };

    onEnterViewport() {
        this.setState({
            visible: true,
        });
    }

    onExitViewport() {
        this.setState({
            visible: false,
        });
    }

    render() {

        let index = this.props.index;

        return (
            <ScrollTrigger onEnter={() => this.onEnterViewport()} onExit={() => this.onExitViewport()}>
                <div className="row_item_card" style={{
                    backgroundImage: index == 1 ?
                        'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))' :
                        index == 2 ?
                            'linear-gradient(135deg,#d0e,#91f)' :
                            'linear-gradient(135deg,#91f,#70f)',
                    boxShadow: '0px 12px 60px ' + (index == 1 ?
                        'rgba(221, 0, 238, 0.8)' :
                        index == 2 ?
                            '#9911ffdb' :
                            '#7700ffcf'),
                    opacity: this.state.visible ? 1 : 0,
                    transform: this.state.visible ? 'none' : 'translateY(200px)',
                    transition: (this.state.visible ? 0.5 : 0.0) + 's cubic-bezier(0, 0.48, 0, 1), opacity ' + (this.state.visible ? 0.4 : 0.0) + 's ease',
                    transitionDelay: (this.state.visible ? 0.1 * index : 0.0) + 's',
                }}>
                    <img style={{ width: '90px', height: '90px', }} src={index == 1 ? triangle : index == 2 ? circle : square} />
                    <div style={{ height: '2px' }}></div>
                </div>
            </ScrollTrigger>
        )
    }
}

export default class Page3 extends Component {
    render() {
        return (
            <div className="page_3">
                <div className="row">
                    <Page3Item index={1} />
                    <div className="spacer"></div>
                    <Page3Item index={2} />
                    <div className="spacer"></div>
                    <Page3Item index={3} />
                </div>
            </div>
        )
    }
}