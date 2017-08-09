import React, { Component } from 'react';

class Gallery extends Component{
    render(){
        let alternate = 'https://www.discovermeteor.com/images/book.svg';
        return(
            <div>
                {
                this.props.items.map((item, index) => {
                    let {title,imageLinks,infoLink} = item.volumeInfo;
                    return (
                        <div key={index} className="Book">
                            <img className="book-image" src={imageLinks !=undefined?imageLinks.thumbnail:alternate} alt="Book Image"/>
                            <div className="book-text">{title}</div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Gallery;