//Insert
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

const InsertRecord = ()=>{

    const navigate = useNavigate();
    const [data, setData] = useState({});

    return(
        <>
            <div>

                <h3>{JSON.stringify(data)}</h3>

            <div>
                <div className="form-group">
                        <label for="id">ID: </label>
                        <input type="text" className="form-control" onChange={(e)=>{setData({...data, id:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label for="name"> Name: </label>
                        <input type="text" className="form-control" onChange={(e)=>{setData({...data, name:e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label for="category">date: </label>
                        <input type="date" className="form-control" onChange={(e)=>{setData({...data, category:e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label for="price">sell: </label>
                        <input type="text" className="form-control" onChange={(e)=>{setData({...data, price:e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label for="price">expense: </label>
                        <input type="text" className="form-control" onChange={(e)=>{setData({...data, price:e.target.value})}} />
                    </div>
                </div>

                <br/>

                <button className="btn btn-success m-1"
                    onClick={() => {
                        const apiURL="http://localhost:5000/transactions"
                        fetch(apiURL, 
                            {method: 'POST', 
                            body: JSON.stringify(data),
                            headers: {'Content-Type': 'application/json'}})
                        .then(res => res.json())
                        .then(res => navigate('/TransactionList'))
                    }}>Save</button>

               
            </div>
        </>
    );
}

export default InsertRecord;