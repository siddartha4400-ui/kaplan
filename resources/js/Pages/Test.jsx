import React, { useEffect, useState } from "react";
import { getJournals ,getArticles ,editorsData } from "../services/api/apis";

const Test = () => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // keys => dashboard,article_in_press,current_issue,archive
            const res = await editorsData(); // ✅ wait for the resolved data
            // const res = await getJournals("journals"); // ✅ wait for the resolved data
            // console.log("API Resolved Data:", res);
            setResponse(res); // ✅ set the actual data, not the Promise
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Raw API Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
    );
};

export default Test;
