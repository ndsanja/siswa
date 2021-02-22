export default function Grid(props) {
  return (
    <div className={`grid ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
