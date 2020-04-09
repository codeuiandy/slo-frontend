import React from 'react'

export default function MoreInfoForm(props) {
  return (
    <div className="col col-md-10">
      <div className="form-group row">
        <label for="inputName" className="col-md-7 pr-0 col-form-label">Do you object to us seeking any reference from any of your past employer</label>
        <div className="col-md-4 pt-2">
          <label>
            <input type="radio" 
              name="objectReference"
              className="minimal"
              onChange={props.handleMoreInfo}
              value="Yes" 
              checked={props.objectReference === 'Yes' ? true : ''}
            />
            Yes
          </label>
          <label style={{ paddingLeft: '25px'}}>
            <input type="radio" 
              name="objectReference"
              className="minimal"
              onChange={props.handleMoreInfo}
              value='No'
              checked={props.objectReference === 'No' ? true : ''} 
            />
            No
          </label>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputName" className="col-md-5 col-form-label">Reason for leaving your last employment</label>
        <div className="col-md-7">
        <select className="form-control w-100" 
          name="reasonForLeaving"
          onChange={props.handleMoreInfo}
          value={props.reasonForLeaving}
        >
          <option value="">select</option>
          <option value="select">select</option>
          <option value="select">select</option>
          <option value="select">select</option>
        </select>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputName" className="col-md-5 col-form-label">More information on the above reason</label>
        <div className="col-md-7">
          <input type="text" 
            className="form-control"
            name="moreInfo"
            onChange={props.handleMoreInfo}
            value={props.moreInfo} 
          />
        </div>
      </div>

    </div>
  )
}