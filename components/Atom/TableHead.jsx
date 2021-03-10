export default function TableHead(props) {
  return (
    <table className={`${props.className && props.className}`}>
      {props.children}
    </table>
  );
}
