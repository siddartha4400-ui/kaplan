import React, { useEffect, useState } from "react";
import { useQueryParams } from "@/Hooks/useQueryParams";
import TableMolecule from "../molecule/Tablemolecule"; // ✅ Import UI Component
import { getTableApiUrl ,deleteTableApiUrl } from "../../../services/apiEndpoints";
import { Inertia } from "@inertiajs/inertia";
const TableOrganisam = () => {
    const { getQueryParam ,updateQueryParams } = useQueryParams(); // ✅ Get table name from URL
    const [tableData, setTableData] = useState([]);
    const [openRow, setOpenRow] = useState(null); // Track open row
    const tableName = getQueryParam("table") || null;
    useEffect(() => {
            window
                .apiRequest(`${getTableApiUrl(tableName)}`)
                .then((response) => {
                    if (response?.success) {
                        const responseData = response.data;
                        setTableData(responseData ?? []);
                    } else {
                        console.warn("Unexpected response:", response);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching journal:", error);
                });
    }, [tableName]);

    const toggleAccordion = (id) => {
        setOpenRow(openRow === id ? null : id);
    };

    const handleEdit = (row) => {
        // console.log("Edit:", row);
        Inertia.visit(`/journal-form?edit=${row.id}`);
    };

    const handleDelete = (id) => {
        // console.log("Delete:", id);
        // deleteTableApiUrl
        window
        .apiRequest(`${deleteTableApiUrl(tableName ,id)}`)
        .then((response) => {
            if (response?.success) {
                const responseData = response.data;
                setTableData(responseData ?? []);
            } else {
                console.warn("Unexpected response:", response);
            }
        })
        .catch((error) => {
            console.error("Error fetching journal:", error);
        });

    };

    return (
        <TableMolecule
            tableName={tableName}
            tableData={tableData}
            openRow={openRow}
            toggleAccordion={toggleAccordion}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default TableOrganisam;
