import React, { useEffect, useState } from 'react'
import styles from "./Modal.module.css";
import { Box, Button, Modal, Typography } from '@mui/material';
import headerImage from "../../assets/icono1.svg";
import { Link } from "react-router-dom";

export default function ModalScreen() {

  const [open, setOpen] = useState(false);//Hook
  const [prueba, setPrueba] = useState();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 800,
    bgcolor: 'background.paper',
    // border: '1px solid #D5DBDB',
    boxShadow: 24,
    borderRadius:5,
    p: 2,
  };
  

  const handleOpen = () => {
    setOpen(true);
  }; 
  const handleClose = () => {
  setOpen(false);  
  };

  useEffect(()=>{
    setTimeout(()=>{
      handleOpen();
    },2000);
  },[]);

  return (
    <div className={styles.Modal}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className={styles.modalBox}>
    <img src={headerImage} alt="" className={styles.headerLogo}/>
    <Typography id="modal-modal-title" variant="h2" component="h2" className={styles.title}>
      ¿Porque es tan importante que te registres?
    </Typography>
   
    <Typography className={styles.description}>
    Al registrarte en Huellitas a casa, no solo estarás ayudando a reunir mascotas con sus dueños, sino que también disfrutarás de beneficios
    </Typography>

    <Box className={styles.Container}>

    <Box>
    <Typography className={styles.subtitle}>
    Alertas personalizadas
    </Typography>
    <Typography className={styles.info}>
    Enviaremos notificaciones automáticas cada vez que una mascota sea reportada como perdida o encontrada cerca de tu ubicación. ¡Mantente al tanto de los casos más recientes y actúa rápido!
    </Typography>
    </Box>

    <Box>
    <Typography className={styles.subtitle}>
    Actualizaciones de tu caso
    </Typography>
    <Typography className={styles.info}>
    Enviaremos notificaciones automáticas cada vez que una mascota sea reportada como perdida o encontrada cerca de tu ubicación. ¡Mantente al tanto de los casos más recientes y actúa rápido!
    </Typography>
    </Box>

    </Box>
    <Box className={styles.containerBtn}>
      <Link to="/">
      <button className={styles.registroBtn}>Registrate</button>
      </Link>
      <button className={styles.omitirBtn} onClick={handleClose}>Omitir</button>
    </Box>
  </Box>
</Modal>
    </div>
  )
}