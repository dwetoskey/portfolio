import React from "react";
import { Card } from "react-bootstrap";
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";




function Resume(){

    return (
        <Card>
  <Card.Body>
    <Card.Title>Resume</Card.Title>
    <Card.Text>
      You can look at my resume by pressing the button below.
    </Card.Text>
    <Button variant="primary" onClick={()=> window.open("https://docs.google.com/document/d/1VwG2IQDwT1hjfnLeJ-SGv-n6QfhCJN_xWMrIVOQlF8M/edit?usp=sharing","_blank")}>Check it out</Button>
  </Card.Body>
</Card>
    )
}

export default Resume;