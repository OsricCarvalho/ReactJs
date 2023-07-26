

import  {useState} from 'react';

function Data2(){

    let records=[

        {

            "name":"James",

            "dept":"HR",

            "salary":567

        },

        {

            "name":"Shafeeq",

            "dept":"IT",

            "salary":2000

        }

     ]

     function addEmployee(){

        setEmployees( (oldRecords)=> {

                                        let newRecord=   {"name":"Jason Bourn","dept":"Tred Stone","salary":40000}

                                        return [...oldRecords,newRecord]

        })

       




     }

     let [employees,setEmployees]=useState(records)

    return(

        <>

                <input type="button" value="New Employee" onClick={addEmployee}/>

                <table>

                    <tr>

                        <td>Name</td>

                        <td>Department</td>

                        <td>Salary</td>

                    </tr>

                    {

                        employees.map((rec)=>

                                        <tr>

                                            <td> {rec.name} </td>

                                            <td> {rec.dept}</td>

                                            <td> {rec.salary}</td>

                                        </tr>

                                        )

                    }

                </table>




        </>

    )

}




export default Data2
