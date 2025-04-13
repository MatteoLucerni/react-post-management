function Modal({ onBtnClick, children }) {
  return (
    <div>
      <button onClick={onBtnClick}>Hide Inputs</button> <br />
      <br />
      <div>{children}</div>
    </div>
  );
}

export default Modal;
