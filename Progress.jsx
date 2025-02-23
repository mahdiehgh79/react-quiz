const Progress = ({ index, numQuestions, points, maxPoints }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index}></progress>
      <p>
        <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};
export default Progress;
