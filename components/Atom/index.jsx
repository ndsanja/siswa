export function Avatar(props) {
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

export function Box(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Breadcrumbs(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Button(props) {
  return (
    <button
      onClick={props.onClick && props.onClick}
      className={`focus:outline-none ${props.className && props.className}`}
    >
      {props.children}
    </button>
  );
}

export function ButtonGroup(props) {
  return (
    <div
      className={`flex overflow-hidden ${
        props.vertical && "divide-y flex-col"
      } ${props.horizontal && "divide-x flex-row"} ${
        props.className && props.className
      }`}
    >
      {props.children}
    </div>
  );
}

export function Card(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Container(props) {
  return (
    <div className={`container ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Flex(props) {
  return (
    <div className={`flex ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Grid(props) {
  return (
    <div className={`grid ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function IconButton(props) {
  return (
    <button
      onClick={props.onClick && props.onClick}
      className={`focus:outline-none ${props.className && props.className}`}
    >
      {props.children}
    </button>
  );
}

export function Tab(props) {
  return (
    <div
      onClick={props.onClick && props.onClick}
      className={`cursor-pointer ${props.className && props.className}`}
    >
      {props.children}
    </div>
  );
}

export function Table(props) {
  return (
    <table className={`${props.className && props.className}`}>
      {props.children}
    </table>
  );
}

export function TableBody(props) {
  return (
    <table className={`${props.className && props.className}`}>
      {props.children}
    </table>
  );
}

export function TableHead(props) {
  return (
    <table className={`${props.className && props.className}`}>
      {props.children}
    </table>
  );
}

export function TabPanel(props) {
  return (
    <div className={`${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export function Tabs(props) {
  return (
    <div className={`flex ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
