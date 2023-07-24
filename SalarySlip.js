function SalarySlip(props){

    let salary = props.salary
    let tax = 0

    if(salary>2000){
        tax = salary * 21/100

    }else{
        tax = salary*15/100

    }
    let net = salary-tax

    return(
        <div>
            <br></br>
        Name:{props.name}<br></br>
        Salary:{salary} <br></br>
        Tax is: {tax}<br></br>
        Net Salary is:{net}
        </div>
    )
}
export default SalarySlip;