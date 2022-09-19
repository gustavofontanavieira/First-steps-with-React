const Joke = (props) => {
  console.log(props);
  return (
    <section>
      {props.punchline && <h1>{props.setup}</h1>}
      <h1>{props.punchline}</h1>
      <hr />
    </section>
  );
};

export default Joke;
