
import "./CircleAction.css"

const CircleAction = ({children}) => {
  return (  
    <a href="https://www.roscosmos.ru/34617/">
      <div className="circle-elem">{children}</div>
    </a>
    
  );
}
 
export default CircleAction;