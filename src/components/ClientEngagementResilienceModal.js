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
    label: <strong>No discussion</strong>,
  },
  1: {
    style: {
      color: '#E66E23',
    },
    label: <strong>Resilience pathway<br/> discussion</strong>,
  },
  2: {
    style: {
      color: '#32A4A0',
    },
    label: <strong>Agree on climate <br/>scenario</strong>,
  },
  3: {
    style: {
      color: '#4BA046',
    },
    label: <strong>Risk assessment<br/> completed</strong>,
  },
};

const ClientEngagementResilienceModal = () => {
    const dispatch = useDispatch();
    const ProjectClientEngagementResilience = useSelector(state => state.ProjectClientEngagementResilience);

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
      <Modal width={1000} title="Client Engagement on Climate Change Resilience" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
      <div style={style}>
      <Slider value={ProjectClientEngagementResilience} onChange={handleNumberChange('ProjectClientEngagementResilience')} min={0} max={3} marks={marks} />
    </div>
      </Modal>
    </>
  );
};

export default ClientEngagementResilienceModal;