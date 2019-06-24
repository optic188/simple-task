import React from 'react';
import './../App.css';
import ItemComponent from './ItemComponent'
import {Input, Button} from 'antd';
import {loadItem, searchItem, resetItem} from "../redux/actions";
import { connect } from "react-redux";

class Table extends React.Component {
    componentDidMount(){
        this.props.loadItem()
    }
    search = (e) => {
        this.props.searchItem(e.target.value)
    }
    reset=()=> {
        this.props.resetItem()
    }
    render() {
        const {items} = this.props
        return (
            <div className="wrapper">
                <div className="table-list">
                    <header className="table-list_header">
                        <h2>Table list</h2>
                    </header>
                    <Input placeholder="Search" onChange={this.search} />
                    <Button type="primary" onClick={this.reset} >Reset</Button>
                    <p>items found: {items.length}</p>
                    <table className="table-list_body">
                        <tbody>
                            {items.length>0 && items.map((elem) => {
                                return <ItemComponent
                                    key={elem.id}
                                    {...elem}
                                />
                            })}
                            {!items.length>0 && <tr><td>No resaults found</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    loadItem: () => dispatch(loadItem()),
    searchItem: value => dispatch(searchItem(value)),
    resetItem: ()=> dispatch(resetItem())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
