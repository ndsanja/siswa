export default function ButtonGroup(props) {
  return (
    <div
      className={`flex overflow-hidden ${
        props.vertical && "divide-y flex-col"
      } ${props.horizontal && "divide-x flex-row"} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </div>
  );
}
