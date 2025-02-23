const NextButtton = ({ dispatch, answer }) => {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "Nextquestion" })}
    >
      Next
    </button>
  );
};
export default NextButtton;
