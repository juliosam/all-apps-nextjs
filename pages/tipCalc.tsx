import { Box, Button} from "@mui/material";
import { useState } from "react";
import { Bill } from "./tip-calc-components/Bill";
import { BillPerPerson } from "./tip-calc-components/BillPerPerson";
import { PeopleNumber } from "./tip-calc-components/PeopleNumber";
import { TipPercent } from "./tip-calc-components/TipPercent";
import { TipPerPerson } from "./tip-calc-components/TipPerPerson";
import Container from "../components/Container";

function TipCalc (){
    const [bill, setBill] = useState(0)
    const [payersNumber, setPayersNumber] = useState(1)
    const [tipPercent,setTipPercent] = useState(0.15)
    const reset = () => {setBill(0); setPayersNumber(1); setTipPercent(0.15)}
    return (
      <Container>
        <div className="App">
          <h3 className="spli">SPLI</h3>
          <h3 className="tter">TTER</h3>
          <Box sx={{
            width: 730,
            height: 380,
            display: 'flex',
            justifyContent:'space-between',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 3,
            }} >
            <Box sx={{
            width: 310,
            height: 310,
            padding: 2,
            backgroundColor: 'white',
            borderRadius: 3,
            }} >
              <Bill setBill={setBill}/> 
              <TipPercent setTipPercent={setTipPercent}/>
              <PeopleNumber setPayersNumber={setPayersNumber}/>
            </Box>
            <Box sx={{
            width: 310,
            height: 310,
            padding: 5,
            backgroundColor: 'hsl(186, 14%, 43%)',
            borderRadius: 3,
            }} >
              <BillPerPerson bill={bill} payersNumber={payersNumber}/>
              <TipPerPerson bill={bill} payersNumber={payersNumber} tipPercent={tipPercent}/>
              <Button 
              onClick={reset} variant='contained' style={{width: '230px', marginTop:'80px', backgroundColor:'hsl(172, 67%, 45%)'}}>RESET</Button>
            </Box>
          </Box>
        </div> 
      </Container>
    );
}

export default TipCalc