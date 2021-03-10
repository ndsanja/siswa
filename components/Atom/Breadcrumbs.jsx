export default function Breadcrumbs(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
