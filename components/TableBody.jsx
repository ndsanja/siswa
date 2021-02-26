export default function TableBody(props) {
  return (
    <table className={`${props.className && props.className}`}>
      {props.children}
    </table>
  );
}
