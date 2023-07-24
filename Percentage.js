
function Percentage(props){

    let maths = props.maths
    let sci = props.sci
    let marks = parseInt(sci) + parseInt(maths)
    let total = (marks*100)/200
    let result

    if (total >= 90){
        
        result = "A+"
    }

    if (total < 90  ){
        result = "B"
    }

    if (total < 70 ){
        result = "C"
    }
    return(
        <div>
             <br></br>
            Name: <b>{props.name}</b>
            <br></br>
            maths: <b>{maths}</b>
            <br></br>
            sci: <b>{sci}</b>
            <br></br>
            Marks: <b>{marks}</b>
            <br></br>
            Percentage: <b>{total}%</b>
            <br></br>
            Result: <b>{result}</b>
        </div>

    )


}
export default Percentage;