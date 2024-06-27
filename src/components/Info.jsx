

import "./Info.css"

const Info = ({className ,children}) => {
  return ( 
     <div className={className ? `info ${className}` : 'info'}>{children}</div>
   );
}
 
export default Info;