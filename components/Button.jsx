export default function Button(props) {
  return (
    <button
      color={
        (props.className = `${"bg-primary-main hover:bg-primary-dark text-textColor-primary-dark rounded-lg"} px-3 py-2`)
      }
    >
      {props.children}
    </button>
  );
}
