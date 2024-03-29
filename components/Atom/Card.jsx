export default function Card(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
