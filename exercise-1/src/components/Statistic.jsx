function Statistic(props) { 
    const score = props.courseResult.map(data => data.score)
    const average = score.reduce((sum, value) => (sum + value)) / score.length
    const min = Math.min(...score)
    const max = Math.max(...score)

    return (
        <div className="statistic-container">
            <div className="title">
                <h5>AVERAGE</h5>
                <p className="average">{average.toFixed(2)}</p>
            </div>
            <div className="title">
                <h5>MIN</h5>
                <p>{min}</p>
            </div>
            <div className="title">
                <h5>MAX</h5>
                <p>{max}</p>
            </div>
        </div>
    );
}

export default Statistic