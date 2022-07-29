import React, { useEffect, useState } from "react";
import { request } from "../../helpers";
import "@testing-library/jest-dom"
import axios from 'axios'

jest.mock('axios')

console.log("axios",axios)

export const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        request()
        .then(res => setData(res.data))
    }, []);


    return (
        <div className="list">

            {data.map((e, i) => {
              return <p key={i}>{JSON.stringify(e.title)}</p>;
            })}

        </div>
    )
}