import React from 'react';
import { Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux'


const YesNoRadioGroup = () => {
    
const dispatch = useDispatch();
const ProjectClimateChangeRiskReviewComplete = useSelector(state => state.ProjectClimateChangeRiskReviewComplete);
  
const handleNumberChange = id => e => {
    console.log(id, e)
    dispatch({type: 'update', key: [id], payload: e.target.value})
    dispatch({type: 'recalculate' })
}


  return (
    <Radio.Group onChange={handleNumberChange('ProjectClimateChangeRiskReviewComplete')} value={ProjectClimateChangeRiskReviewComplete}>
        
      <Radio value={1}>Yes</Radio>
      <Radio value={0}>No</Radio>
    </Radio.Group>
  );
};

export default YesNoRadioGroup;