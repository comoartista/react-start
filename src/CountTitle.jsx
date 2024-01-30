export default function CountTitle({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! <b>Pro</b> for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
