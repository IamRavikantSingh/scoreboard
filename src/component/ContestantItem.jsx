import React from "react";

export default class ContestantItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: this.props.isSelected,
            color:'red',
            selectedColor: 'yellow',
            commpletedColor: 'blue',
            judge_id: this.props.judge_id
            
        }
    }

    render() {
        const item = this.props.item
        return (
            <div className='cListitem' onClick={() => {this.props.changeSelectedIndex(this.props.index); this.props.handleClick(this.props.index); }}>
                <div className={(item[this.state.judge_id]!=0) ? ' completed cMarker ' : ((this.props.isSelected ? ' selected ' : ' uncompleted ') + ' cMarker')}/>
                <div className='cVertical'>
                {console.log('judge id',this.state.judge_id)}
                {console.log('judge val',item[this.state.judge_id])}
                    <div id='cName'>{item.name}</div>
                    <div id='cEvent'>{item.event}</div>

                </div>
                <div className='cBranch'>{item.branch}</div>
               
            </div>
        )
    }
}