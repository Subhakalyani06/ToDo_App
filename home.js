import React, {useState} from 'react';
const Home = () =>{

    const[info, updateInfo] = useState([{name:"wipro",role:"testing",year:"2"},
                                        {name:"sony", role:"software developer", year:"1"},
                                        {name:"infosys", role:"ui developer", year:"1"},
                                        {name:"samsung", role:"software developer", year:"1"},
                                        {name:"oracle", role:"software developer", year:"3"},
                                        {name:"l&t", role:"software developer", year:"3"}
                                        ]);
    const[msg, updateMsg] = useState("");
 
    const[newname, updateName] = useState("");
    const[newrole, updateRole] = useState("");
    const[newyear, updateYear] = useState("");
    const[companyid, updateId] = useState(-1);

const SaveInfo = () =>{
    if(companyid == -1){
    let newinfo = {name:newname, role:newrole, year:newyear}
    updateInfo(info=>[...info,newinfo]);
    updateMsg("Info Added In To Your List");
    }else{
        info[companyid].name = newname;
        info[companyid].role = newrole;
        info[companyid].year = newyear;
        updateInfo(info=>[...info]);
        updateId(-1);
        updateMsg("info updated successfully");

    }
    updateName("");
    updateRole("");
    updateYear("");
}
const Dinfo = (id) =>{
    info.splice(id,1);
    updateInfo(info=>[...info]);
    updateMsg("Successfully Deleted");
}

const EditCompany = (id) =>{
    updateName(info[id].name);
    updateRole(info[id].role);
    updateYear(info[id].year);
    updateId(id);

}

    return(
        <div className="container mt-5">
            <div className="row bg-light">
                <div className="col-lg-12 text-center mt-5">
                    <h3 className="text-info">About My Total Experience -: {companyid}</h3>
                    <p className="text-danger">{msg}</p>
                </div>
                <div className="col-lg-3">
                    <label>Company Name</label>
                    <input type="text" 
                    className="form-control"
                    onChange={obj=>updateName(obj.target.value)}
                    value={newname}/>
                </div>
                <div className="col-lg-3">
                <label>Role/Designation</label>
                    <input type="text" 
                    className="form-control"
                    onChange={obj=>updateRole(obj.target.value)}
                    value={newrole}/>
                </div>
                <div className="col-lg-3">
                <label>Duration in Year</label>
                    <input type="number" 
                    className="form-control"
                    onChange={obj=>updateYear(obj.target.value)}
                    value={newyear}/>
                </div>
                <div className="col-lg-3 mt-4">
                    <button className="btn btn-primary" onClick={SaveInfo}>Save Experience</button>
                </div>
                <div className="col-lg-12 mt-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-info">
                                <th>Company Name</th>
                                <th>Role/Designation</th>
                                <th>Years</th>
                                <th>Edit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                info.map((xinfo,id)=>{
                                    return(
                                        <tr>
                                            <td>{xinfo.name}</td>
                                            <td>{xinfo.role}</td>
                                            <td>{xinfo.year}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={EditCompany.bind(this,id)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={Dinfo.bind(this,id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;