function Demo() {
  const colors = ["red", "green", "blue", "purple"];
  const loggedIn = false;
  return (
    <>
      <ul>
        {colors.map((colour) => (
          <>
            <li>{colour}</li>
          </>
        ))}
      </ul>

      <h1 style={{ color: "red", fontSize: "10px" }}>
        HELLO {loggedIn ? "ADMIN" : "USER"}
      </h1>
      <h1>{10 < 5 && "new"}</h1>
      {10 < 5 && <h1>Greate</h1>}
    </>
  );
}

export default Demo;

// const Demo1 = () => {
//   return <>
//   </>;
// };
