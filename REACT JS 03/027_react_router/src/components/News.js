import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Dl from './dulieu.json';


class News extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                <div className="container h-100">
                    <div className="row h-100">
                    <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                        <h1 className="mb-1 text-center">Trang danh sách tin</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </header>

                <div className="container">
                <div className="row mt-3">
                {
                     Dl.map((value,key) => (
                        <NewsItem key={key} 
                        tinId={value.id}
                        linkAnh={value.linkAnh} 
                        tieuDe={value.tieuDe} 
                        trichDan={value.trichDan} />
                    ))
                }
                </div>
                </div>

            </div>
        );
    }
}

export default News;