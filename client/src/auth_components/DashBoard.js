import React, { Fragment, useState, useEffect } from "react";
import InputTodo from "../components/InputTimesheet";
import ListTodos from "../components/ListTimesheet.js";

import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("");
    const getProfile = async() => {
        try{
            const res= await fetch ("http://localhost:5000/dashboard", {
                method: "POST",
                headers: { jwt_token : localStorage.token }
            });
            const parseData = await res.json();
            setName(parseData.user_name);
        } catch (err) {
            console.error(err.message);
        }
    };
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout Successfully");
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Fragment>
            <h1 className="mt-5">Dashboard</h1>
            <button onClick={e => logout(e)} className="btn btn-primary mb-3">Logout</button>
            <br/>
            <InputTodo />
            <br/>
            <ListTodos />
        </Fragment>
    );
};

export default Dashboard;