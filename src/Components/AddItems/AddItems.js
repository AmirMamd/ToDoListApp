import React,{Component} from "react";
import "./AddItems.css"

class AddItems extends Component{

    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(props);
      }


    state ={
        name: '',
        hours: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.name.value === ''){
            return false
        }else{
            this.props.addItem(this.state)
            this.setState({
            name:'',
            hours: ''
        })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <td className="table">
                <input type="text" className="AddName" id="name" placeholder="Enter Item" onChange={this.handleChange}></input>
                <input type="number" className="AddHours" id="hours" placeholder="Enter hours" onChange={this.handleChange}></input>
                <input type="submit" value="Add" />
                </td>
            </form>
        );
    }

}

export default AddItems