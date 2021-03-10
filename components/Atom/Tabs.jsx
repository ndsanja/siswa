export default function Tabs(props) {
  return (
    <div className={`flex ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
