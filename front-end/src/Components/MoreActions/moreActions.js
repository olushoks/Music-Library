import React, { useState } from "react";
import axios from "axios";
import { AddSong, EditSong } from "./moreActionForms";
import "./moreActions.css";

const MoreAction = ({ action }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [response, setResponse] = useState("");

  // String to hold dynamic styles for form
  // const formStyle = `more-form ${form}`;

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  // Get all properties in states property object except ID
  // const properties = {};
  // for (let prop in props) {
  //   if (prop !== "id") {
  //     properties[prop] = props[prop];
  //   }
  // }

  // if (action === "post") {
  //   axios
  //     .post(`http://localhost:5000/api/songs/add`, properties)
  //     .then((res) => {
  //       const responseMessage = `Song has been succesfully added to database`;
  //       this.setState({ responseType: `success` });
  //       this.setState({ responseMessage });
  //     })
  //     .catch(() => {
  //       const responseMessage = `One or  more invalid input. Try Again!`;
  //       this.setState({ responseType: `error` });
  //       this.setState({ responseMessage });
  //     });
  // }
  // if (action === "put") {
  //   axios
  //     .put(`http://localhost:5000/api/songs/edit/${id}`, properties)
  //     .then((res) => {
  //       const responseMessage = `Song has been succesfully edited`;
  //       this.setState({ responseType: `success` });
  //       this.setState({ responseMessage });
  //     })
  //     .catch(() => {
  //       const responseMessage = `One or  more invalid input. Try Again!`;
  //       this.setState({ responseType: `error` });
  //       this.setState({ responseMessage });
  //     });
  // }

  // CLEAR FORM

  if (action === "edit") {
    return <AddSong />;
  }

  return <p>What!!</p>;
};

export default MoreAction;
