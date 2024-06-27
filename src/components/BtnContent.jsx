
import "./BtnContent.css";

const BtnContent = ({ atr, className ="", children, clickHandler }) => {
  return (
    <button type="button" data-key={atr} onClick={clickHandler} className={className}>
      {children}
    </button>
  );
};
export default BtnContent;
