import { useEffect, useState, Link, Layout } from "react";
import { useNavigate } from "react-router-dom";
import InsertRecord from "./InsertRecord";

function TransactionList(){
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const apiUrl = "http://localhost:5000/transactions";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const formateddata= data.map((info)=>{
        return(
            <>
            < Layout />
         <div className="col-2 border border-warning">
            <Link className="btn btn-Secondary" type="button" to={'/transacctions/add/add'} element={<InsertRecord />}>Add Record</Link>
        </div>
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.date}</td>
                <td>{info.sale}</td>
                <td>{info.expense}</td>
                <button className='btn btn-success m-2' 
                onClick={() => navigate("/transactions/profit-loss/date")}>
                     Profit/Loss/Date
                </button>
                
                <button className='btn btn-success ' 
                onClick={() => navigate("/transactions/profit-loss")}>
                     View Profit/Loss
                </button>

            </tr>
            </>
        )
    })
    return(<table className="table" border={2}>{formateddata}</table>);
}

export default TransactionList;