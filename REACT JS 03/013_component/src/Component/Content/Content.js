import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai:0
        }
    }
    thongbao = () => {
        alert('haha');
    }
    thongbaoo = (x) => {
        alert(x);
    }
    
    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
            <div className="btn btn-info" onClick={() => this.editClick(1)}>Edit</div>
            <div className="btn btn-warning">Remove</div>
            </div>
        </div>
        )
    renderForm = () => {
        return (
        <div className="row">
            <div className="form-group">
            <input ref={(dulieunhap) => { this.trungGian = dulieunhap}} type="text" name="ten" className="form-control" defaultValue={this.props.tieude} /><br/>
            <div className="btn btn-block btn-success" onClick={() => this.editClick(0)}>save</div>
            </div>
        </div> 
        )
    }
    displayCheck = () => {
        if(this.state.trangThai === 0) {return this.renderButton();
        }
        else {
            return this.renderForm()
        }
    }
    editClick = (x) => {
        this.setState({trangThai:x});
        if (x==0) {console.log(this.trungGian.value)}
    }

    render() {
        return (
            <section>
            <div className="container">
                <div className="row align-items-center">
                <div className={"col-lg-6 order-lg-"+this.props.order1}>
                    <div className="p-5">
                    <img className="img-fluid rounded-circle" src={"img/0"+ this.props.anh +".jpg"} alt />
                    </div>
                </div>
                <div className={"col-lg-6 order-lg-"+this.props.order2}>
                    <div className="p-5">
                    <h2 className="display-4">{this.props.tieude}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    
                    <div>
                       
                    {this.displayCheck()}
                       

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        );
    }
}

export default Content;