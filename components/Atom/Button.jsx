export default function Button(props) {
  return (
    <button
      onClick={props.onClick && props.onClick}
      className={`focus:outline-none ${props.className && props.className}`}
    >
      {props.children}
    </button>
  );
}
