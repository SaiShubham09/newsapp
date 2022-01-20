import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyConetent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className=' badge rounded-pill bg-dark'> {source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://www.bollyinside.com/wp-content/uploads/2021/12/Elon-Musk-rejects-mounting-criticism-that-his-satellites-are-obstructing.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">Published by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
