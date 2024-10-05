import React, { useState } from 'react';
import './App.css';
import { Box, Typography, Button, Modal, TextField } from '@mui/material';

const App = () => {

  const [tabledata, setTabledata] = useState([
    {
      id: 1,
      fieldone: "Value One: 1",
      fieldtwo: "Value Two: 1",
      fieldthree: "Value Three: 1",
      fieldfour: "Value Four: 1",
      fieldfive: "Value Five: 1"
    },
    {
      id: 2,
      fieldone: "Value One: 2",
      fieldtwo: "Value Two: 2",
      fieldthree: "Value Three: 2",
      fieldfour: "Value Four: 2",
      fieldfive: "Value Five: 2"
    }
  ])

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [fieldone, setFieldone] = useState("")
  const [fieldtwo, setFieldtwo] = useState("")
  const [fieldthree, setFieldthree] = useState("")
  const [fieldfour, setFieldfour] = useState("")
  const [fieldfive, setFieldfive] = useState("")

  const addHandler = () => {
    const adddata = {
      fieldone,
      fieldtwo,
      fieldthree,
      fieldfour,
      fieldfive
    }

    setTabledata((prev) => {
      const updatedArray = [...prev, adddata]
      return updatedArray
    })

    setOpenModal(false)
    setFieldone("")
    setFieldtwo("")
    setFieldthree("")
    setFieldfour("")
    setFieldfive("")
  }

  return (
    <Box className="container">
      <Box className="table-header">
        <Button
          variant="outlined"
          onClick={openModalHandler}
        >
          Create
        </Button>
      </Box>
      <Box className="table">
        <Box className="table_header">
          <Typography>Field One</Typography>
          <Typography>Field Two</Typography>
          <Typography>Field Three</Typography>
          <Typography>Field Four</Typography>
          <Typography>Field Five</Typography>
        </Box>

        <Box className="table_body">
          {
            tabledata.map((item) => {
              return (
                <Box className="table_row" key={item.id}>
                  <Typography>{item.fieldone}</Typography>
                  <Typography>{item.fieldtwo}</Typography>
                  <Typography>{item.fieldthree}</Typography>
                  <Typography>{item.fieldfour}</Typography>
                  <Typography>{item.fieldfive}</Typography>
                </Box>
              )
            })
          }

        </Box>
      </Box>

      <Modal
        open={openModal}
        onClose={closeModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal_container"
        disableEnforceFocus={true}
      >
        <Box className="modal-box">
          <Box className="modal_header">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create New Data
            </Typography>
            <Button onClick={closeModalHandler}
              variant="outlined"
              color="error"
            >X</Button>
          </Box>
          <Box className="modal_body">
            <TextField id="outlined-basic" label="Field One" variant="outlined" fullWidth margin="normal"
              onChange={(e) => setFieldone(e.target.value)}
            />
            <TextField id="outlined-basic" label="Field Two" variant="outlined" fullWidth margin="normal"
              onChange={(e) => setFieldtwo(e.target.value)}
            />
            <TextField id="outlined-basic" label="Field Three" variant="outlined" fullWidth margin="normal"
              onChange={(e) => setFieldthree(e.target.value)}
            />
            <TextField id="outlined-basic" label="Field Four" variant="outlined" fullWidth margin="normal"
              onChange={(e) => setFieldfour(e.target.value)}
            />
            <TextField id="outlined-basic" label="Field Five" variant="outlined" fullWidth margin="normal"
              onChange={(e) => setFieldfive(e.target.value)}
            />
            <Box className="modal_button">
              <Button variant="contained" sx={{
                width: "180px",
                height: "50px"
              }}
                onClick={addHandler}
              >Submit</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default App;
