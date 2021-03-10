import Container from "../Atom/Container";

export default function Index(props) {
  return (
    <div className="w-9/12 absolute right-0 top-0 py-24 bg-white">
      <Container className="container p-10 ">{props.children}</Container>
    </div>
  );
}
