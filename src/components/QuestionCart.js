const QuestionCart = (item) => {
    return <div className='ans-sheet-module'>
        <span style={{ background: "lightblue", borderRadius: "30px", padding: "5px 10px" }}>{item.tags.join(' , ')}</span>
        <h2>{item.question}</h2>
        <p>{item.answer.split("\n")}</p>
        <p>{item.answer.split("\n")[0]}</p>
        <p>{item.answer.split("\n")[3]}</p>
        <p>{item.answer.split("\n")[6]}</p>
    </div>
}
export default QuestionCart;