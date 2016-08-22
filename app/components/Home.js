/**
 * Created by v-yunjia on 2016/8/22.
 */


import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="content-wrapper" style={{ minHeight: 1126 + 'px'}}>

                <section className="content-header">
                    <h1>
                        Blank page
                        <small>it all starts here</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li className="active">Blank page</li>
                    </ol>
                </section>


                <section className="content">


                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Title</h3>

                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                    <i className="fa fa-minus"></i></button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                    <i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            Start creating your amazing application!
                        </div>

                        <div className="box-footer">
                            Footer
                        </div>

                    </div>


                    </section>

            </div>
        );
    }
}

export default Home;