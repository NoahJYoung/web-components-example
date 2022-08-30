/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Button, Dropdown, Menu, Modal, Typography} from 'antd';

const {Title} = Typography;

const menu = (
    <Menu items={[
        {key: '1', label: '1st menu item'},
        {key: '2', label: '2nd menu item'},
        {key: '3', label: '3rd menu item'},
    ]} />
);

export const App = () => {
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
        <div style={{
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '30px',
        }}>
            <Title level={1}>Ant design</Title>

            <Dropdown overlay={menu}>
                <Button>Open dropdown</Button>
            </Dropdown>

            <Button style={{paddingBottom: '20px'}} onClick={showModal}>Show modal</Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};
