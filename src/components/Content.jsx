import "./Content.css";

const ContentHome = ({ className, children }) => {
  return (
    <div className={className ? `content ${className}` : "content"}>
      {children}
    </div>
  );
};

export default ContentHome;
