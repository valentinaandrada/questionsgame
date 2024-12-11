import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import Question from "./components/Question";
import questions from './data/questions.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [openModal, setOpenModal] = useState(false);
 


  const generateRandomQuestion = () => {
    if (!questions.length) return;

    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
  };

  const handleSpin = () => {
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      setOpenModal(true);
      generateRandomQuestion();
    }, 1000);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentQuestion(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.main",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "secondary.main",
          height: "310px",
          width: "310px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          animate={{
            rotate: isSpinning ? 720 : 0,
          }}
          transition={{
            repeat: isSpinning ? Infinity : 0,
            duration: 0.5,
            ease: "linear",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSpin}
            sx={{
              height: "290px",
              width: "290px",
              borderRadius: "50%",
              textAlign: "center",
            }}
          >
            <Typography variant="h1">GIRAR</Typography>
          </Button>
        </motion.div>
      </Box>

      <Question
        open={openModal}
        onClose={handleCloseModal}
        question={currentQuestion}
      />
    </Box>
  );
}

export default App;
