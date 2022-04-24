import React from "react";
import { Card } from "react-bootstrap";
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";




function Resume(){

    return (
        <Card className="bg-transparent">
  <Card.Body>
    <Card.Title className="text-light fs-1 align-self-center">Resume</Card.Title>
    <Card.Text className="text-light fs-3">
      You can take a look at my resume with the link below.
    </Card.Text>
    <Button onClick={()=> window.open("https://docs.google.com/document/d/1VwG2IQDwT1hjfnLeJ-SGv-n6QfhCJN_xWMrIVOQlF8M/edit?usp=sharing","_blank")} className="btn-lg fs-3 bg-transparent">Check it out</Button>
  </Card.Body>
</Card>
    )
}

export default Resume;