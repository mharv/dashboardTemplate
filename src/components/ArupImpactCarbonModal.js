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
    label: <strong>No or Low impact <br/> on carbon</strong>,
  },
  1: {
    style: {
      color: '#E66E23',
    },
    label: <strong>20-50% improvement <br/> compared to Carbon BAU</strong>,
  },
  2: {
    style: {
      color: '#32A4A0',
    },
    label: <strong>more than 50% <br/> improvement compared <br/> to Carbon BAU</strong>,
  },
  3: {
    style: {
      color: '#4BA046',
    },
    label: <strong>Net Zero</strong>,
  },
};

const ArupImpactCarbonModal = () => {
    const dispatch = useDispatch();
    const ProjectArupImpactCarbon = useSelector(state => state.ProjectArupImpactCarbon);

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
      <Modal width={1000} title="Arup impact on carbon
" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
      <div style={style}>
      <Slider value={ProjectArupImpactCarbon} onChange={handleNumberChange('ProjectArupImpactCarbon')} min={0} max={3} marks={marks} />
    </div>
      </Modal>
    </>
  );
};

export default ArupImpactCarbonModal;