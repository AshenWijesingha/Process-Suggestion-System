import React, { useContext, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Table } from "react-bootstrap";
import { UserContext } from "./context/UserContext";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Users() {
  let { users, addUser, deleteUser,updateUser } = useContext(UserContext);

  const [update, setUpdate] = useState(false);


  const [currentId,setCurrentId] = useState(null)
  const [currentName,setCurrentName] = useState(null)
  const [currentAddress,setCurrentAddress] = useState(null)
  const [currentTelNumber,setCurrentTelNumber] = useState(null)
  const [currentEquipment, setCurrentEquipment] = useState(null)
  const [currentPriority, setCurrentPriority] = useState(null)
  const [currentManager, setCurrentManager] = useState(null)

  let [name, setName] = useState(null);
  let [address, setAddress] = useState(null);
  let [telnumber, setTelNumber] = useState(null);
  let [equipment, setEquipment] = useState(null);
  let [priority, setPriority] = useState(null);
  let [manager, setManager] = useState(null);

  let nameRef = useRef(null);
  let addressRef = useRef(null);
  let telnumberRef = useRef(null);
  let equipmentRef = useRef(null);
  let priorityRef = useRef(null);
  let managerRef = useRef(null);

  let handleUsers = (e) => {
    e.preventDefault();

    let id = Date.now();
    let user = {
      id,
      name,
      address,
      telnumber,
      equipment,
      priority,
      manager,
    };
    addUser(user);
    nameRef.current.value = "";
    addressRef.current.value = "";
    telnumberRef.current.value = "";
    equipmentRef.current.value = "";
    priorityRef.current.value = "";
    managerRef.current.value = "";
  };

  let handleEdit = (user) => {
    setUpdate(true);
    setCurrentId(user.id)
    setCurrentName(user.name)
    setCurrentAddress(user.address)
    setCurrentTelNumber(user.telnumber)
    setCurrentEquipment(user.equipment)
    setCurrentPriority(user.priority)
    setCurrentManager(user.manager)
    nameRef.current.value = user.name
    addressRef.current.value = user.address
    telnumberRef.current.value = user.telnumber
    equipmentRef.current.value = user.equipment
    priorityRef.current.value = user.priority
    managerRef.current.value = user.manager
  };

  let handleUpdate = (e) => {
    e.preventDefault()

    updateUser(currentId,currentName,currentAddress,currentTelNumber,currentEquipment)
    setCurrentId(null)
    setCurrentAddress(null)
    setCurrentName(null)
    setCurrentTelNumber(null)
    setCurrentEquipment(null)
    setCurrentPriority(null)
    setCurrentManager(null)
    setName(null)
    setAddress(null)
    setTelNumber(null)
    setEquipment(null)
    setPriority(null)
    setManager(null)
    setUpdate(false)

    nameRef.current.value = ""
    addressRef.current.value = ""
    telnumberRef.current.value = ""
    equipmentRef.current.value = ""
    priorityRef.current.value = ""
    managerRef.current.value = ""

  } 

  return (
    <Container>
      <br></br>
      <h1 className="text-center">Process Management</h1>

      {update ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>What is the department ?</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCurrentName(e.target.value)}
              ref={nameRef}
              placeholder="Enter name"
              required
            />

            <Form.Label>Number of process running ?</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setCurrentAddress(e.target.value)}
              ref={addressRef}
              placeholder="Enter address"
              required
            />

            <Form.Label>Specific process in the department ?</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCurrentTelNumber(e.target.value)}
              ref={telnumberRef}
              placeholder="Enter Tel Number"
              required
            />

            <Form.Label>Average time taken to complete the task ?</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setCurrentEquipment(e.target.value)}
              ref={equipmentRef}
              placeholder="Enter equipment"
              required
            />

            <Form.Label>Select the priority</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setPriority(e.target.value)}
              placeholder="Enter priority"
              required
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>

            <Form.Label>Select the department manager</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setManager(e.target.value)}
              required
            >
              <option value="">Select manager</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Michael Johnson">Michael Johnson</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Button type="submit">Update Process</Button>
        </Form>
      ) : (
        <Form onSubmit={handleUsers}>
          <Form.Group>
            <Form.Label>What is the department ?</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              placeholder="Enter name"
              required
            />

            <Form.Label>Number of process running ?</Form.Label>
            <Form.Control
              type="Number"
              onChange={(e) => setAddress(e.target.value)}
              ref={addressRef}
              placeholder="Enter address"
              required
            />

            <Form.Label>Specific process in the department ?</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTelNumber(e.target.value)}
              ref={telnumberRef}
              placeholder="Enter Tel Number"
              required
            />

            <Form.Label>Average time taken to complete the task ?</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setEquipment(e.target.value)}
              ref={equipmentRef}
              placeholder="Enter Equipment"
              required
            />

            <Form.Label>Select the priority</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setPriority(e.target.value)}
              placeholder="Enter priority"
              required
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>

            <Form.Label>Select the department manager</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setManager(e.target.value)}
              required
            >
              <option value="">Select manager</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Michael Johnson">Michael Johnson</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="success">
            Add Process
          </Button>
        </Form>
      )}
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Department name</th>
            <th className="text-center">Number of Process</th>
            <th className="text-center">Specific Process</th>
            <th className="text-center">Average Time</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Department Manager</th>
            <th className="text-center">Edit Process</th>
            <th className="text-center">Delete Process</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((u) => (
              <tr>
                <td className="text-center">{u.name}</td>
                <td className="text-center">{u.address}</td>
                <td className="text-center">{u.telnumber}</td>
                <td className="text-center">{u.equipment}</td>
                <td className="text-center">{u.priority}</td>
                <td className="text-center">{u.manager}</td>
                <td className="text-center">
                  <Button onClick={() => handleEdit(u)}>Edit Process</Button>
                </td>
                <td className="text-center">
                  <Button onClick={() => deleteUser(u.id)} variant="danger">
                    Delete Process
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Users;
