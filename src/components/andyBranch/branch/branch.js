import React, { Component } from 'react'
import Layout from '../../layout/index'
import {httpPost, httpGet,httpPatch } from '../../../actions/data.action';
import { hideLoader, showLoader } from '../../../helpers/loader';
import  './branchStyle/branch.css'
import BranchTable from './branchTable'
import axios from 'axios'
let uid = ''

export default class branch extends Component {

constructor(props){
    super(props)
    this.state={
       
      name:'',
      address:'',
            region:''

        
    }

    this.branchName = this.branchName.bind(this);
    this.branchAddress = this.branchAddress.bind(this);
    this.region = this.region.bind(this);

    this.editName = this.editName.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.editRegion = this.editRegion.bind(this);
 

    
}

branchName (e) {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  }

  region (e) {
    this.setState({region: e.target.value });
  
    console.log(this.state.region);
  }

  
branchAddress(e) {
    console.log(e.target.value);
    this.setState({address: e.target.value });
  }




  handleSubmit=()=>{
    let data = this.state
    
   showLoader();
   const res =  httpPost('create_branch',data);
   hideLoader();
   if(res.code === 201){
     hideLoader();
     }}

     
 


     componentDidMount = async (id) => {
      await this.getOneBranch(id);
    }
  
    getOneBranch = async (id) => {
      try{
        const res = await httpGet('branch/' + id);
        if(res.code === 200){
          hideLoader()
          console.log(res)
          this.setState({
            name:res.data.branch.name,
            address:res.data.branch.address,
            region:res.data.branch.region
          });
          console.log(this.state.name)
        
         uid = res.data.branch.id
         
       
        if(res.code ===200) { 
          // return this.handleEdit(uid)
        let fun=  (uid)=>{this.handleEdit(uid)}
      }
     }
      } catch (error){
        hideLoader()
        console.log(error)
      }

     
    }
    handleEdit= async (uid) => {
      const res = await httpGet('branch/' + uid);

      if (res.code===200) {
        hideLoader()
        const UpdateData = this.state
        let res = await httpPatch('edit_branch/' + uid, UpdateData);
        if (res.code===200) {
          hideLoader()
        }

        else{
          hideLoader()
        }
        console.log(res)
        console.log(this.state)
      }

      else{
        hideLoader()
        console.log(this.state)
      }
      console.log(this.state)
      console.log(uid)
      console.log(res)
     
    }


    editName (e) {
      this.state.name=""
      this.setState({ name: e.target.value });
      console.log(e.target.value);
    }
  
    editRegion (e) {
      this.setState({region: e.target.value });
    
      console.log(this.state.region);
    }
  
    
  editAddress(e) {
      console.log(e.target.value);
      this.setState({address: e.target.value });
    }
  






    
    render() {
        return (
            <div>
                <Layout>
                 
                <div class="app-content">
          <section class="section">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" class="text-muted">Home</a></li>
              <li class="breadcrumb-item"><a href="#" class="text-muted">Performance</a></li>
        <li class="breadcrumb-item active text-" aria-current="page">{this.state.name}</li>
            </ol>
                <div class="section-body">
                <div class="row">
                  
								<div class="col-lg-12">
                                    
									<div class="card">

										<div class="card-body">
                                        <div class="card-header">
                                        <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal3">CREATE NEW</button>
                                        <div class="inputf">
                                               <input placeholder="Input a Branch Name"/><button className="search-bt">Search</button>
                                           </div>
										</div>
									
         <BranchTable  getOneBranch={this.getOneBranch}/>
     
										

										</div>
									</div>
								</div>
                                </div>
                                </div>

                       
                
                    </section>
                    </div>
                    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog"  aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="example-Modal3">CREATE NEW BRANCH</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label for="recipient-name" class="form-control-label">Branch Name</label>
										<input  onChange={this.branchName} type="text" class="form-control" id="recipient-name"/>
									</div> 

									<div class="form-group">
										<label for="recipient-name" class="form-control-label">Address</label>
										<input onChange={this.branchAddress} type="text" class="form-control" id="recipient-name"/>
									</div>


                                	<label for="recipient-name" class="form-control-label">Region</label>
                                    <select value={this.state.region}  onChange={this.region}    class="form-control sel" id="exampleFormControlSelect1">
                                        
      <option value="nonex">Select Region</option>
      <option value="RegionA">Region A</option>
      <option value="RegionB">Region B</option>
      <option value="RegionC">Region C</option>
      <option value="RegionD">Region D</option>
    </select>
 
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
								<button onClick={this.handleSubmit}  type="button" class="btn btn-primary" >Create Now</button>
							</div>
						</div>
					</div>
				</div>

        <div  class="modal fade" id="exampleModal45" tabindex="-1" role="dialog"  aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="example-Modal3">CREATE EDIT BRANCH</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label  class="form-control-label">Branch Name</label>
										<input  onChange={this.editName}  value={this.state.name}  type="text" class="form-control" id="recipient-name"/>
									</div> 

									<div class="form-group">
										<label  class="form-control-label">Address</label>
										<input onChange={this.editAddress} value={this.state.address}   type="text" class="form-control" id="recipient-name"/>
									</div>


                                	<label for="recipient-name" class="form-control-label">Region</label>
                                    <select onChange={this.editRegion} value={this.state.region}      class="form-control sel" id="exampleFormControlSelect1">
                                        
      <option value="">Select Region</option>
      <option value="RegionA">Region A</option>
      <option value="RegionB">Region B</option>
      <option value="RegionC">Region C</option>
      <option value="RegionD">Region D</option>
    </select>
 
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
								<button onClick={()=>this.handleEdit(uid)}  type="button" class="btn btn-primary" >Create Now</button>
							</div>
						</div>
					</div>
				</div>
                    </Layout> 
                    
            </div>
        )
    }
}
