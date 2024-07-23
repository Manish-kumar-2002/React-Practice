import React, { useState } from 'react'
import Icons from './components/icons/Icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'

const itemArray = new Array(9).fill("empty");
const App = () => {
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty", 0, 9);
    }
    
    const checkIsWinner = () => {
        if (
            itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} Won`)
        } else if (
            itemArray[3] === itemArray[5] &&
            itemArray[3] === itemArray[4] &&
            itemArray[3] !== "empty"
        ) {
            setWinMessage(`${itemArray[3]} Won`)
        }
        else if (
            itemArray[6] === itemArray[7] &&
            itemArray[6] === itemArray[8] &&
            itemArray[6] !== "empty"
        ) {
            setWinMessage(`${itemArray[6]} Won`)
        }
        else if (
            itemArray[0] === itemArray[3] &&
            itemArray[0] === itemArray[6] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} Won`)
        }
        else if (
            itemArray[1] === itemArray[4] &&
            itemArray[1] === itemArray[7] &&
            itemArray[1] !== "empty"
        ) {
            setWinMessage(`${itemArray[1]} Won`)
        }
        else if (
            itemArray[2] === itemArray[5] &&
            itemArray[2] === itemArray[8] &&
            itemArray[2] !== "empty"
        ) {
            setWinMessage(`${itemArray[2]} Won`)
        }
        else if (
            itemArray[0] === itemArray[4] &&
            itemArray[0] === itemArray[8] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} Won`)
        }
        else if (
            itemArray[2] === itemArray[4] &&
            itemArray[2] === itemArray[6] &&
            itemArray[2] !== "empty"
        ) {
            setWinMessage(`${itemArray[2]} Won`)
        }
    }

    const changeItem = itemNumber => {
        if (winMessage) {
            return toast(winMessage, { type: "success" })
        }
        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        } else {
            return toast("already Filled", { type: "error" })
        }
        // if(itemArray[0] !== "empty" && itemArray[1] !== "empty" && itemArray[2] !== "empty" && itemArray[3] !== "empty" && itemArray[4] !== "empty" && itemArray[5] !== "empty" && itemArray[6] !== "empty" && itemArray[7] !== "empty" && itemArray[8] !== "empty"){
        //     return toast("Match is Draw", { type: "warning" })
        // }
        checkIsWinner()
    }
    
    return (
        <Container className="p-5">
            <ToastContainer position='bottom-center' />
            <Row>
                <Col className='offset-md-3' md={6}>
                    {winMessage ? (
                        <div className='mb-2 mt-2'><h1 className='text-success text-uppercase text-center'>{winMessage}</h1>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning text-uppercase mb-3">
                            {isCross ? "cross" : "circle"} Turns
                        </h1>
                    )}
                    <div className="box-container">
                        {itemArray.map((item, index) => (
                            <Card onClick={() => changeItem(index)}>
                                <CardBody className='box'>
                                    <Icons name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                    {winMessage ? (
                            <Button className='mt-3' color='sucess' block onClick={reloadGame}>Reload the Game</Button>
                    ) : (
                        "Null"
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default App