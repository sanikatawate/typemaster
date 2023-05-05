

function Results(props){
    const errors= props.wrong;
    const accuracyPercentage= props.right/(props.wrong+props.right);
    const total= props.right;
    const count = props.word*2;

    return (
        <div>
        <h1>WPM: {count}</h1>
        <h2>Accuracy: {Math.round(accuracyPercentage)}%</h2>
        <h2>Errors: {errors}</h2>
        <h2>Typed: {total}</h2>
        </div>
    );
  };
  
  export default Results;