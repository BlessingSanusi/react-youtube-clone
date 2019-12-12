import React, { Component } from 'react'
import { Container, TextField} from '@material-ui/core'



class SearchBar extends Component {
state={
    searchTerm: ''
}

handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
         searchTerm: e.target.value
     })
}

handleSubmit = (e) => {
   const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    
    onFormSubmit(searchTerm);
    e.preventDefault()

}

    render() {
        return (
       <Container maxWidth="md">
           
           <form onSubmit= {this.handleSubmit}>
                    <TextField fullWidth label="Search" onChange ={this.handleChange}/>
                </form>
       </Container>
          
        )
    }
}

export default SearchBar