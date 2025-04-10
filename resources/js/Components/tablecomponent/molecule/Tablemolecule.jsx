import React from "react";
import { Link } from "@inertiajs/react";
const TableMolecule = ({
    tableName,
    tableData,
    openRow,
    toggleAccordion,
    handleEdit,
    handleDelete,
}) => {
    return (
        <div className="p-6">
            <h2 className="text-lg font-bold mb-3">
                {tableName ? `Table: ${tableName}` : "Table: --"}
            </h2>

            <div className="space-y-3">
                {tableData.length > 0 ? (
                    tableData.map((row) => (
                        <div
                            key={row.id}
                            className="border border-gray-300 rounded-lg shadow-sm"
                        >
                            {/* Accordion Header */}
                            <div
                                className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
                                onClick={() => toggleAccordion(row.id)}
                            >
                                <span className="font-semibold">
                                    {Object.values(row).slice(0, 2).join(" - ")}
                                </span>
                                <span>{openRow === row.id ? "▲" : "▼"}</span>
                            </div>

                            {/* Accordion Content */}
                            {openRow === row.id && (
                                <div className="p-4 bg-gray-100 border-t border-gray-300">
                                    <pre className="p-2 bg-white border rounded">
                                        {JSON.stringify(row, null, 2)}
                                    </pre>
                                    <div className="mt-3">
                                        <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
                                            <Link href={row.edit} preserveState>
                                                Edit
                                            </Link>
                                        </button>
                                        {/* <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={() => handleEdit(row)}>
                                            Edit
                                        </button> */}
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No Data</p>
                )}
            </div>
        </div>
    );
};

export default TableMolecule;
