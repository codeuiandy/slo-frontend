import React, { Component } from 'react';
import $ from 'jquery';
import { NotificationManager } from 'react-notifications';
import axios from 'axios'
import { modal } from 'bootstrap';
import Layout from '../layout/index'
import {httpPost, httpGet, httpDelete, httpPatch } from '../../actions/data.action';
import { hideLoader, showLoader } from '../../helpers/loader';
import  './branchStyle/branch.css';
import BranchTable from './branchTable';
import BranchModal from '../Modals/Branch';



export default class branch extends Component {
constructor(props){
  super(props)
  this.state={ 
    branch: {}, 
    branches: [],
    modalMode: 'create',
    currentEditId: null,
    errorMessage1: null  
  }
}

  handleChange = (e) => {
    const { branch } = this.state;
    if(e.target.name === 'name'){
      branch[e.target.name] = e.target.value;
      this.setState({ branch, errorMessage1: null });
    } else {
      branch[e.target.name] = e.target.value;
      this.setState({ branch });
    }
  }

  componentDidMount(){
    this.getBranch()
  }

  getBranch = async () => {
    try{
	  const res = await httpGet('all_branch');
	  showLoader()
      if(res.code === 200){
        this.setState({ branches: res.data.branches})
        hideLoader()
      }
    
    } catch (error){
      hideLoader()
      console.log(error)
    }
		
  }

  handleEdit = async (id) => {
		const res = await httpGet(`branch/${id}`);
		console.log(res.data)
		if(res.code === 200){
			this.setState({ 
				branch: res.data.branch, 
				currentEditId: id, 
				modalMode: 'edit',
			});
		}
	}
  
  deleteBranch = async (id) => {
		showLoader()
		const { branches } = this.state; 
		try{
		  const res = await httpDelete('delete_branch/' + id);
		  if(res.code === 200){
        hideLoader()
			  this.setState({  
				branches: branches.filter(branch => branch.id !== id)
			  });  
		  }
		
		} catch (error){
		  hideLoader()
		  console.log(error)
		  }
		}


  handleSubmit= async ()=>{
    const { branch, errorMessage1, modalMode, currentEditId } = this.state
    try{
      showLoader();

      if(branch.name === undefined || branch.name === ''){
        hideLoader();
        this.setState({ errorMessage1: 'Branch name is required'});
        return;
      }

      if(errorMessage1 !== null){
        hideLoader();
        return NotificationManager.warning('Complete all required fields')
      }

      if(modalMode === 'create'){
        const res = await httpPost(`create_branch`, branch);
        if(res.code === 201){
          $('.modal').modal('hide');
          $(document.body).removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      } else {
        const res = await httpPatch(`edit_branch/${currentEditId}`, branch);
        if(res.code === 200){
          $('.modal').modal('hide');
          $(document.body).removeClass('modal-open');
          $('.modal-backdrop').remove();
        }
      }
      this.getBranch();
      this.clearState();
    }catch(error){
      hideLoader()
      console.log(error)
    }
  }

  clearState = () => {
		this.setState({
			branch: {
        name: '',
        address: '',
        region: ''
			},
			modalMode: 'create',
      currentEditId: null,
      errorMessage1: null
		})
	}

	closeModal = () => {
    this.clearState()
	}
	
  render() {
    const { 
      modalMode,
      errorMessage1,
      branch,
    } = this.state;
        return (
                <Layout page='branch'>
                <div class="app-content">
          <section class="section">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" class="text-muted">Home</a></li>
              <li class="breadcrumb-item"><a href="#" class="text-muted">Performance</a></li>
        <li class="breadcrumb-item active text-" aria-current="page">Performance</li>
            </ol>
                <div class="section-body">
                <div class="row">
                  
								<div class="col-md-10">
                                    
									<div class="card">
                  <div class="card-header custom-header">
                    <div class="col-md-12">
                    <button type="button" class="btn " data-toggle="modal" data-target="#branchModal">CREATE NEW</button>
                    </div>
									</div>

										<div class="card-body">
									
         <BranchTable 
            branches={this.state.branches}
            handleDelete={this.deleteBranch}
            handleEdit={this.handleEdit}
          />
     
										

										</div>
									</div>
								</div>
                                </div>
                                </div>

                       
                
                    </section>
                    </div>
        <BranchModal
          modalMode={modalMode}
          handleSubmit={this.handleSubmit}
          closeModal={this.closeModal}
          branch={branch}
          handleChange={this.handleChange}
          errorMessage1={errorMessage1}
        />   
      </Layout> 
    )
  }
}
