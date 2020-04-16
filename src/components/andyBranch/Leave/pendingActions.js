import React, { Component } from 'react'
import Layout from '../../layout/index'
import './pending.css'

export default class pendingActions extends Component {
    render() {
        return (
            <div>
                <Layout>
                <div className="app-content">
          <section className="section">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#" className="text-muted">Home</a></li>
              <li className="breadcrumb-item"><a href="#" className="text-muted">Performance</a></li>
        <li className="breadcrumb-item active text-" aria-current="page">leave</li>
            </ol>
            <div className="section-body">
							<div className="row">
								<div className="col-lg-6 col-xl-6 col-md-6 col-12">
									<div className="card">
										<div className="card-body">
											<div className="pending">
											
											
													<h1 className="request-Name">Open Leave Request</h1>
                                                    <h6 className="request-Name">John Doe/IT Dept</h6>
                                                    <button className="btn btn-success">Approve</button>
                                                    <button className="btn btn-danger">Reject</button>

											
											</div>


                                            <div className="pending">
											
											
                                            <h1 className="request-Name">Open Leave Request</h1>
                                            <h6 className="request-Name">John Doe/IT Dept</h6>
                                            <button className="btn btn-success">Approve</button>
                                            <button className="btn btn-danger">Reject</button>

                                    
                                    </div>


                                    <div className="pending">
											
											
                                            <h1 className="request-Name">Open Leave Request</h1>
                                            <h6 className="request-Name">John Doe/IT Dept</h6>
                                            <button className="btn btn-success">Approve</button>
                                            <button className="btn btn-danger">Reject</button>

                                    
                                    </div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-xl-6 col-md-6 col-12">
									<div className="card">
										<div className="card-body ">
											<div className="dash2 ">
                                            <div className="notic-head text-center">
                                                <h1>Todo List</h1>
                                                </div>
                                            <div className="todo-header ">
                                           
                                                
                                                <div className="checkBoxTab">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">Get new computer for IT manager</label>
                                                </div>


                                                <div className="checkBoxTab">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">Get new computer for IT manager</label>
                                                </div>

                                                <div className="checkBoxTab">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">Get new computer for IT manager</label>
                                                </div>

                                                
                                            
                                                    
                                                    </div>
												
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-xl-6 col-md-6 col-12">
									<div className="card">
										<div className="card-body ">
											<div className="dash2 text-center">
												
											<div className="notic-head text-center">
                                                <h1>Notice Board</h1>
                                                </div>
                                                <ol className="notice-list">
                                                    <li>IT Manager was sacked yesterday for bad data management</li>
                                                    <li>IT Manager was sacked yesterday for bad data management</li>
                                                    <li>IT Manager was sacked yesterday for bad data management</li>
                                                    <li>IT Manager was sacked yesterday for bad data management</li>
                                                </ol>

                                        
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-xl-6 col-md-6 col-12">
									<div className="card">
										<div className="card-body ">
											<div className="dash2 ">
                                            <div className="notic-head text-center">
                                                <h1>Messages</h1>
                                                </div>
												<div className="chat-container">
                                                <div className="chat-text">
                                                    <div className="chat-head">
                                                        <h1>Chima Obi</h1>
                                                        </div>
                                                        <div className="chat-info">
                                                            <span>I wish to start the investigation on</span><span>10/2/2089</span>
                                                        </div>
                                                        </div>

                                                              <div className="chat-text">

                                                             
                                                        <div className="chat-head">
                                                        <h1>IT Group chat</h1>
                                                        </div>
                                                        <div className="chat-info">
                                                            <span>David what are you waiting for, plz join us on a zoom cll</span><span>10/2/2089</span>
                                                        </div>
                                                        </div>

                                                        <div className="chat-text">
                                                        <div className="chat-head">
                                                        <h1>Security CEO</h1>
                                                        </div>
                                                        <div className="chat-info">
                                                            <span>I wish to start the investigation on</span><span>10/2/2089</span>
                                                        </div>
</div>




                                                              </div>
                                                   
                                                    
													
												
											</div>
										</div>
									</div>
								</div>
							</div>
                            </div>
                           




            </section>
            </div>
                </Layout>
                
            </div>
        )
    }
}
