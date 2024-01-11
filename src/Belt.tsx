let fileType: string;

function Belt(props: { coinName: string }) {
  if (props.coinName == "USD") {
    fileType = ".png";
  } else {
    fileType = ".svg";
  }

  return (
    <>
      <div className="belt">
        <div className="coin-profile">
          <img src={"./" + props.coinName.toLowerCase() + fileType} />
        </div>
        <p>{props.coinName}</p>
      </div>
    </>
  );
}

export default Belt;
