import React, { Component } from 'react';
import Dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';


class NewsDetail extends Component {
   
    
    render() {
        var dem=1;

        // console.log(this.props.match.params.id);
        return (
            <div>
                <header className="masthead tintuc">
                <div className="container h-100">
                    <div className="row h-100">
                    <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                        <h1 className="mb-1 text-center">Trang chi tiết tin tức</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
                {
                        Dl.map((value,key) => {
                                if (value.id === parseInt(this.props.match.params.id) ) {
                                return ( <div className="jumbotron jumbotron-fluid" key={key}>
                                <div className="container">
                                <img src={value.linkAnh} alt="Note" className="img-fluid width100" />
                                <h3 className="display-3 t">{value.tieuDe}</h3>
                                <p className="lead">{value.trichDan}</p>
                                <hr className="my-2" />
                                <p>{value.noiDung}</p>
                                </div>
                            </div> )
                   
                                    } else { return ; }
                                }
                                

    )
}

                


                <div className="container">                                 
                    <h4 className="card-title text-center">Tin liên quan</h4>                          
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                        {
                            Dl.map((value,key) => {
                            if (value.id !== parseInt(this.props.match.params.id) ) {
                                
                            if (dem<=4) {
                                dem++;
                                return (
                                    <NewsRelated key={key} 
                                    tinId={value.id}
                                    linkAnh={value.linkAnh} 
                                    tieuDe={value.tieuDe} 
                                    trichDan={value.trichDan}
                                    ></NewsRelated>
                                )
                            }
                        } return true;
                        })}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default NewsDetail;