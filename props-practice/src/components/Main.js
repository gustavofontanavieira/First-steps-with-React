import jokesData from "../jokesData";

export default function Main() {
  return (
    <div>
      {jokesData.map((joke) => {
        return (
          <div>
            {joke.setup && <h3>{joke.setup}</h3>}
            <p>{joke.punchline}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

/*  return (
    <div>
      <Joke
        setup="What’s the best thing about Switzerland?"
        punchline="I don’t know, but the flag is a big plus."
        isPun={true}
        upVotes={10}
        dwnVoter={2}
      />
      <Joke setup="I invented a new word!" punchline="Plagiarism!" />
      <Joke
        setup="Did you hear about the mathematician who’s afraid of negative numbers?"
        punchline="He’ll stop at nothing to avoid them."
        isPun={true}
      />
      <Joke
        setup="Helvetica and Times New Roman walk into a bar."
        punchline="“Get out of here!” shouts the bartender. “We don’t serve your type.”"
        isPun={false}
      />
    </div>
  ); */
