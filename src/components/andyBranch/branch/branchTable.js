import React, { Component } from 'react'
import { httpGet,httpDelete } from '../../../actions/data.action';
import { hideLoader, showLoader } from '../../../helpers/loader';
import axios from 'axios'
import ReactTooltip from "react-tooltip";
const API_URL = 'http://jsonplaceholder.typicode.com';



export default class branchTable extends Component {
	constructor(props){
		super(props)
		this.state = {
			users: []
		  }
	
	}

	componentDidMount = async () => {
		// const url = `${API_URL}/users/`;
		// axios.get(url).then(response => response.data)
		// .then((data) => {
		//   this.setState({ users: data,
		// 	loading:false
		
		
		// })
		//   console.log(this.state.users)
		//  })

		await this.getBranch();
	}

  getBranch = async () => {
	  
    try{
	  const res = await httpGet('all_branch');
	  showLoader()
      if(res.code === 200){
	console.log(res.data.branches)
	this.setState({ users: res.data.branches})
	hideLoader()
      }
    
    } catch (error){
      hideLoader()
      console.log(error)
    }
		
	  }

	  deleteUser = async (id) => {
		showLoader()
		const { users } = this.state; 
		try{
		  const res = await httpDelete('delete_branch/' + id);
		  if(res.code === 200){
			this.setState({  
			
				users:users.filter(user=>user.id !== id)
			  });  
		hideLoader()
		  }
		
		} catch (error){
		  hideLoader()
		  console.log(error)
		}
			
		  }
	
	

	//   handleSave = async () => {
	// 	const res = await httpGet(`all_branch`);
	// 	console.log(res)
		
	//   }



	//   deleteUser(id) {  
	// 	const { users } = this.state; 
	// 	this.setState({loading:true })    
		
	// 	console.log('loading data')
	//    axios.delete(`${API_URL}/users/` + id).then(result=>{  
	// 	//  alert(result.data);  
	// 	  this.setState({  
	// 		loading:false,
	// 		users:users.filter(user=>user.id !== id)  
	// 	  });  
		
	// 	});  
	//   } 
    render() {
        return (
            <div>
                <div class="table-responsive">
												<table class="table table-bordered table-hover mb-0 text-nowrap">
												<thead>
													<tr>
														<th>Branch Name</th>
														<th>Region</th>
														<th>Address</th>
														<th>Actions</th>
														
													</tr>
													</thead>
													{this.state.users.map((user) => (
														<tbody>
													<tr key={user.id}>
												
														<td>{user.name}</td>
														<td>{user.region}</td>
														<td>{user.address}</td>
														<td>
                                                            <span class='edit'>Edit</span>
															<button data-tip="React-tooltip" disabled={this.state.loading?true : false} onClick={() => this.deleteUser(user.id)}
															 class='del '>{this.state.loading?'Loading...' : 'Delete'}</button>
                                                        </td>
													</tr>
													</tbody>
													))}
													<ReactTooltip place="right" type="warning" effect="float"/>
												</table>
											
											</div>
											
            </div>
        )
    }
}
