export default function Avatar(props) {
  return (
    <div
      className={`overflow-hidden object-cover object-center ${
        props.className && props.className
      }`}
    >
      {props.children}
    </div>
  );
}
