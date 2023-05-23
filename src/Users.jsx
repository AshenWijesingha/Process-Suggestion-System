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

  let [name, setName] = useState(null);
  let [address, setAddress] = useState(null);
  let [telnumber, setTelNumber] = useState(null);
  let [equipment, setEquipment] = useState(null);

  let nameRef = useRef(null);
  let addressRef = useRef(null);
  let telnumberRef = useRef(null);
  let equipmentRef = useRef(null);

  let handleUsers = (e) => {
    e.preventDefault();

    let id = Date.now();
    let user = {
      id,
      name,
      address,
      telnumber,
      equipment,
    };
    addUser(user);
    nameRef.current.value = "";
    addressRef.current.value = "";
    telnumberRef.current.value = "";
    equipmentRef.current.value = "";
  };

  let handleEdit = (user) => {
    setUpdate(true);
    setCurrentId(user.id)
    setCurrentName(user.name)
    setCurrentAddress(user.address)
    setCurrentTelNumber(user.telnumber)
    setCurrentEquipment(user.equipment)
    nameRef.current.value = user.name
    addressRef.current.value = user.address
    telnumberRef.current.value = user.telnumber
    equipmentRef.current.value = user.equipment
  };

  let handleUpdate = (e) => {
    e.preventDefault()

    updateUser(currentId,currentName,currentAddress,currentTelNumber,currentEquipment)
    setCurrentId(null)
    setCurrentAddress(null)
    setCurrentName(null)
    setCurrentTelNumber(null)
    setCurrentEquipment(null)
    setName(null)
    setAddress(null)
    setTelNumber(null)
    setEquipment(null)
    setUpdate(false)

    nameRef.current.value = ""
    addressRef.current.value = ""
    telnumberRef.current.value = ""
    equipmentRef.current.value = ""

  } 

  return (
    <Container>
      <br></br>
      <h1 className="text-center">Customer Management</h1>

      {update ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCurrentName(e.target.value)}
              ref={nameRef}
              placeholder="Enter name"
              required
            />

            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCurrentAddress(e.target.value)}
              ref={addressRef}
              placeholder="Enter address"
              required
            />

            <Form.Label>Tel Number</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setCurrentTelNumber(e.target.value)}
              ref={telnumberRef}
              placeholder="Enter Tel Number"
              required
            />

            <Form.Label>Equipment</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCurrentEquipment(e.target.value)}
              ref={equipmentRef}
              placeholder="Enter equipment"
              required
            />
          </Form.Group>
          <br />
          <Button type="submit">Update Customer</Button>
        </Form>
      ) : (
        <Form onSubmit={handleUsers}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              placeholder="Enter name"
              required
            />

            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              ref={addressRef}
              placeholder="Enter address"
              required
            />

            <Form.Label>Tel Number</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setTelNumber(e.target.value)}
              ref={telnumberRef}
              placeholder="Enter Tel Number"
              required
            />

            <Form.Label>Equipment</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEquipment(e.target.value)}
              ref={equipmentRef}
              placeholder="Enter Equipment"
              required
            />
          </Form.Group>
          <br />
          <Button type="submit" variant="success">
            Add Customer
          </Button>
        </Form>
      )}
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Address</th>
            <th className="text-center">Tel Number</th>
            <th className="text-center">Equipment</th>
            <th className="text-center">Edit Customer</th>
            <th className="text-center">Delete Customer</th>
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
                <td className="text-center">
                  <Button onClick={() => handleEdit(u)}>Edit Customer</Button>
                </td>
                <td className="text-center">
                  <Button onClick={() => deleteUser(u.id)} variant="danger">
                    Delete Customer
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
