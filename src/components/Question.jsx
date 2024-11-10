
import { Modal, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const QuestionModal = ({ open, onClose, question }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
    
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "75%",
         
        }}
      >
        <Typography variant="h5" fontWeight={200}>{question}</Typography>
        <Button onClick={onClose} variant="contained" sx={{ mt: 3, px: 4, borderRadius: 3, fontFamily: 'Grandstander, cursive'}}>
        nueva pregunta
        </Button>
      </motion.div>
    </Modal>
  );
};

export default QuestionModal;
