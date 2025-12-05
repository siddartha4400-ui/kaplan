import React from "react";

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
          const rows = activities.original.data;

          return (
                    <>

                              {/* ------------------ FIXED NAVBAR ------------------ */}
                              <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
                                        <div className="container">
                                                  <span className="navbar-brand mx-auto fw-bold fs-4">
                                                            Exam Preparation Schedule
                                                  </span>
                                        </div>
                              </nav>

                              {/* -------------------------------------------------- */}

                              {/* Add padding-top to avoid content hiding under navbar */}
                              <div className="container py-5" style={{ paddingTop: "90px" }}>

                                        <div className="row justify-content-center">
                                                  <div className="col-md-8">

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
                                                                                                              Weekend / No Study
                                                                                                    </p>
                                                                                          )}

                                                                                          {day.activity.map((act, i) => (
                                                                                                    <p
                                                                                                              key={i}
                                                                                                              className="ms-3 mb-1 text-secondary"
                                                                                                              style={{ fontSize: "16px" }}
                                                                                                    >
                                                                                                              {act.name} ({formatMinutes(act.durationMinutes)})
                                                                                                    </p>
                                                                                          ))}
                                                                                </div>
                                                                      </div>
                                                            ))}

                                                  </div>
                                        </div>

                              </div>
                    </>
          );
};

export default Shedule;
