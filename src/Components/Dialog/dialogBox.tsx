import { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Dropdowns from "../Dropdowns/dropdown";
import { Title, Button, SubmitButton, DialogWrapper } from "./dialogBox.style";

const DialogBox = ({ fontSize }: any) => {
  // Use state to handle the opening and closing of the dialog box
  const [open, setOpen] = useState(false);

  // Function to handle the opening of the dialog box
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle the closing of the dialog box
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogWrapper>
        <Button
          onClick={handleOpen}
          fontSize={fontSize}
          data-testid="dialog-title"
        >
          Search
        </Button>
        <Dialog open={open} onClose={handleClose} data-testid="open-dialog">
          <Title>Search</Title>
          <DialogContent>
            <Dropdowns />
          </DialogContent>
          <SubmitButton onClick={handleClose}>Close</SubmitButton>
        </Dialog>
      </DialogWrapper>
    </>
  );
};

export default DialogBox;
