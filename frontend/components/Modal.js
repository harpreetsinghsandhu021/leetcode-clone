import { Modal, Button, SelectPicker } from "rsuite";
import { useState } from "react";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

const PopUpModal = (props) => {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState("static");
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);
  const data = [
    "12px",
    "13px",
    "14px",
    "15px",
    "16px",
    "17px",
    "18px",
    "19px",
    "20px",
    "21px",
    "22px",
    "23px",
    "24px",
    "25px",
    "26px",
  ].map((item) => ({ label: item, value: item }));
  return (
    <>
      <Modal
        backdrop={backdrop}
        keyboard={false}
        backdropClassName="backdrop"
        open={props.open}
        dialogClassName="modal"
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>
            <h4>Settings </h4>{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="flex center inner--modal">
            <div className="inner-modal-lft">
              <h5>
                <strong>Font Size</strong>
              </h5>
              <p>Choose your preffered font size for the code editor</p>
            </div>
            <div className="inner-modal-rght">
              <SelectPicker
                onChange={props.onSelectChange}
                data={data}
                defaultValue={props.fontSize}
                style={{ width: 224 }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopUpModal;
