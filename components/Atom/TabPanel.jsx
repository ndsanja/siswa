export default function TabPanel(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
