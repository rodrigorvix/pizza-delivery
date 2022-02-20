import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { MessageSuccessStyled } from "./style";

export const MessageSuccess = (props:any) => {

  const goHomePage = ()=> {
    props.close();
    console.log("Ir para home page")
  }
  
  return(
    <MessageSuccessStyled
        open={props.open}
        aria-labelledby="message-successs"
        aria-describedby="Message success order"
      >
        <DialogTitle id="message-success-title">
          {"Success !"}
        </DialogTitle>
       <DialogContent>
         <DialogContentText>
         Your order will be delivered in x minutes
         </DialogContentText>
       </DialogContent>
        <DialogActions>
          <Button onClick={goHomePage}>Back to home page</Button>
        </DialogActions>
      </MessageSuccessStyled>

  );
}