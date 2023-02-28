import React,{Component} from "react";

class AddItems extends Component{

    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(props);
      }


    state ={
        name: '',
        age: ''
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addItems(this.state)
        this.setState({
            name:'',
            age: ''
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type="text" className="AddName" id="name" placeholder="Enter Item" onChange={this.handleChange}></input>
            <input type="number" className="AddAge" id="age" placeholder="Enter Age" onChange={this.handleChange}></input>
            <input type="submit" value="Add" />
            </form>
        );
    }

}

export default AddItems