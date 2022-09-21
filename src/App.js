import React, { useState } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="main-container">
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}
