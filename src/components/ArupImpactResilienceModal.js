import React, { useState } from 'react';
import { Modal, Button, Table, Radio, Divider, Slider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'


const style = {
//   display: 'inline-block',
  height: 200,
  marginLeft: 70,
  marginRight: 70,
};

const marks = {
  0: {
    style: {
      color: '#E61E28',
    },
    label: <strong>No impact on <br/>resilience RCP8.5</strong>,
  },
  1: {
    style: {
      color: '#E66E23',
    },
    label: <strong>Top 5 risks <br/>identified and<br/> mitigated</strong>,
  },
  2: {
    style: {
      color: '#32A4A0',
    },
    label: <strong>No residual risk<br/> in RCP8.5</strong>,
  },
  3: {
    style: {
      color: '#4BA046',
    },
    label: <strong>Positive <br/>resilience outcome</strong>,
  },
};

const ArupImpactResilienceModal = () => {
    const dispatch = useDispatch();
    const ProjectArupImpactResilience = useSelector(state => state.ProjectArupImpactResilience);

    const handleNumberChange = id => e => {
        dispatch({type: 'update', key: [id], payload: e})
        dispatch({type: 'recalculate' })
    }


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button style={{ width: '100%' }} onClick={showModal}>
        Please select
      </Button>
      <Modal width={1000} title="Arup impact on climate change resilience" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
      <div style={style}>
      <Slider value={ProjectArupImpactResilience} onChange={handleNumberChange('ProjectArupImpactResilience')} min={0} max={3} marks={marks} />
    </div>
      </Modal>
    </>
  );
};

export default ArupImpactResilienceModal;