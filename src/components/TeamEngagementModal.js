import React, { useState } from 'react';
import { Modal, Button, Table, Radio, Divider, Slider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'


const style = {
  align: 'center',
  display: 'block',
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
    label: <strong>Sustainability <br/> Inception completed</strong>,
  },
  2: {
    style: {
      color: '#32A4A0',
    },
    label: <strong>Project SD leader <br/> appointed</strong>,
  },
  3: {
    style: {
      color: '#4BA046',
    },
    label: <strong>Internal workshop</strong>,
  },
};

const TeamEngagementModal = () => {
    const dispatch = useDispatch();
    const ProjectTeamEngagement = useSelector(state => state.ProjectTeamEngagement);

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
      <Modal width={1000} title="Team engagement" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
      <div style={style}>
      <Slider value={ProjectTeamEngagement} onChange={handleNumberChange('ProjectTeamEngagement')} min={0} max={3} marks={marks} />
    </div>
      </Modal>
    </>
  );
};

export default TeamEngagementModal;