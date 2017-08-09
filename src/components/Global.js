import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery'


class Global extends Component{
    constructor(props){
        super(props);
        this.state = {
            query:'',
            items:[]
        }
    }
    search(){
        const BASE_URL ='https://www.googleapis.com/books/v1/volumes?q=';
        console.log('search',this.state.query);
        fetch(`${BASE_URL}${this.state.query}`,{method:'GET'})
            .then(response=>response.json())
            .then(json=>{
            let {items} =json;
            this.setState({items});
        });
    }
    render() {
        return(
            <div className="Global">
                <h1>Book Finder !</h1>
                <FormGroup>
                    <inputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search For a Book"
                            onChange={event=>this.setState({query:event.target.value})}
                            onKeyPress={event=>{
                                if(event.key==='Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={()=>this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </inputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>

            </div>
        )

    }
}

export default Global;
