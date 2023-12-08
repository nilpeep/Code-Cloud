import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddModal = (doctor) => {
  const [count, setCount] = useState(4);
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    id: "",
    patient: "",
    day: new Date(),
    consulted: false,
    doctor: doctor,
  });

  const {patient} = data;

  const handleSave = (e) => {
    setData({...data,
      id: count,
      patient: e.target.value
    })
    setCount(count + 1);
    setShow(false);
    alert(patient);
  };

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                value={patient}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} value="Ahmet">
            Save Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;