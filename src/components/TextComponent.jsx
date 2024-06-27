



const TextComponent = ({
  as = "div",
  className = '',
  size,
  fontFamily,
  weight,
  color,
  children,
}) => {
  const As = as;
  const style = {
    fontSize: size,
    fontFamily: fontFamily,
    fontWeight: weight,
    color: color,
  };

  return <As className={className} style={style}>{children}</As>;
};

export default TextComponent;
