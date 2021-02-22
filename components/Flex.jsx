export default function Flex(props) {
  return (
    <div className={`flex ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
