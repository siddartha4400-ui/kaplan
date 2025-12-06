import React, { useState } from "react";

const formatMinutes = (minutes) => {
          const h = Math.floor(minutes / 60);
          const m = minutes % 60;

          if (h === 0) return `${m}m`;
          if (m === 0) return `${h}h`;
          return `${h}h ${m}m`;
};

const formatDate = (dateString) => {
          const date = new Date(dateString);
          return date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
          });
};

const Shedule = ({ activities }) => {
          const [rows, setRows] = useState(activities.original.data.shedule ?? []);
          const holidays = activities.original.data.holidays ?? [];
          console.log(rows)
          const [showModal, setShowModal] = useState(false);

          return (
                    <>
                              {/* ------------------ FIXED NAVBAR ------------------ */}
                              <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
                                        <div className="container d-flex justify-content-between align-items-center">

                                                  <span className="navbar-brand fw-bold fs-4 mx-auto">
                                                            Exam Preparation Schedule
                                                  </span>

                                                  <button
                                                            className="btn btn-outline-primary btn-sm"
                                                            onClick={() => setShowModal(true)}
                                                  >
                                                            View Holidays
                                                  </button>
                                        </div>
                              </nav>

                              {/* Add spacing because navbar is fixed */}
                              <div className="container py-5" style={{ paddingTop: "90px" }}>
                                        <div className="row justify-content-center">
                                                  {rows.length ? <div className="col-md-8">

                                                            {rows.map((day, index) => (
                                                                      <div key={index} className="card shadow-sm mb-4">
                                                                                <div className="card-body">

                                                                                          <h4 className="card-title fw-bold mb-3">
                                                                                                    {formatDate(day.date)}{" "}
                                                                                                    <span className="fw-normal">
                                                                                                              (Study Time: {formatMinutes(day.time)})
                                                                                                    </span>
                                                                                          </h4>

                                                                                          {!day.isWorkingday && (
                                                                                                    <p className="text-danger fw-semibold">
                                                                                                              Holiday : {day.reason}
                                                                                                    </p>
                                                                                          )}

                                                                                          {day.activity.map((act, i) => (
                                                                                                    <p key={i} className="ms-3 mb-1 text-secondary" style={{ fontSize: "16px" }}>
                                                                                                              {act.name} ({formatMinutes(act.durationMinutes)})
                                                                                                    </p>
                                                                                          ))}

                                                                                </div>
                                                                      </div>
                                                            ))}
                                                  </div> : <div className="row justify-content-center text-danger">No Shedule found</div>}
                                        </div>
                              </div>

                              {/* -------------------- HOLIDAY MODAL -------------------- */}
                              {showModal && (
                                        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                                                  <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">

                                                                      <div className="modal-header">
                                                                                <h5 className="modal-title">Holidays This Month</h5>
                                                                                <button
                                                                                          type="button"
                                                                                          className="close btn"
                                                                                          onClick={() => setShowModal(false)}
                                                                                >
                                                                                          ✖
                                                                                </button>
                                                                      </div>

                                                                      <div className="modal-body">
                                                                                {holidays.length ? holidays.map((h, i) => (
                                                                                          <div key={i} className="p-2 border rounded mb-2">
                                                                                                    <strong>{formatDate(h.date)}</strong>
                                                                                                    <br />
                                                                                                    <span className="text-primary">{h.reason}</span>
                                                                                          </div>
                                                                                )) : 'No holidays'}
                                                                      </div>

                                                                      <div className="modal-footer">
                                                                                <button
                                                                                          type="button"
                                                                                          className="btn btn-secondary"
                                                                                          onClick={() => setShowModal(false)}
                                                                                >
                                                                                          Close
                                                                                </button>
                                                                      </div>

                                                            </div>
                                                  </div>
                                        </div>
                              )}
                    </>
          );
};

export default Shedule;
