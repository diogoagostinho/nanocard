function Belt(props: { coinName: string }) {
  return (
    <>
      <div className="belt">
        <div className="coin-profile">
          <img src={"../public/" + props.coinName + ".svg"} />
        </div>
        <p>{props.coinName}</p>
      </div>
    </>
  );
}

export default Belt;
