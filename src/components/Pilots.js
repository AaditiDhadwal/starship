import React, { useEffect, useState } from 'react';
import {
  getShipDetails,
  getPilotData,
  getAllPilots
} from '../Api/StarShipsAPI';
import { StarShipConstants } from '../constants/StarShipConstants';
import PageLoader from '../common/PageLoader';

export default function Pilots() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [pilotData, setPilotData] = useState({});

  const getStarShipDetail = () => {
    const pilotList = [];
    getShipDetails().then(response => {
      setData(response);
      if (response && response['pilots'].length > 0) {
        response['pilots'].forEach(pilotAPI => {
          pilotList.push(getPilotData(pilotAPI));
        });
      }
      if (pilotList && pilotList.length) {
        getAllPilots(pilotList).then(pilotResponse => {
          setPilotData(pilotResponse);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    if (isLoading && data && Object.keys(data).length === 0) {
      getStarShipDetail();
    }
  }, [isLoading, data, pilotData]);

  function generateHTML() {
    const fields = [];
    for (const field of StarShipConstants) {
      fields.push(
        <React.Fragment key={field.key}>
          <div className="row mb-1">
            <div className="col-">
              <strong>{field.label}: &nbsp;</strong>
            </div>
            <div className="col-">{data ? data[field.key] : ''}</div>
          </div>
        </React.Fragment>
      );
    }
    return fields;
  }

  return (
    <React.Fragment>
      <header className="main-header">
        <div className="container">
          <h1>Starships</h1>
        </div>
      </header>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-3">Ship Detail</h3>
              <hr />
            </div>
            <div className="col-md-6">
              <div className="container-fluid">{generateHTML()}</div>
            </div>
            <div className="col-md-6">
              <div className="container-fluid">
                <div className="row mb-1">
                  <div className="col-">
                    <strong>films: &nbsp;</strong>
                  </div>
                  <div className="col-">IMAGE</div>
                </div>
              </div>
            </div>

            <div className="col-12  pt-2">
              <hr />
              <h4 className="mb-3">Pilots</h4>
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th width="30%">Photo</th>
                      <th width="40%">Name</th>
                      <th width="10%">Birth Year</th>
                      <th width="10%">Gender</th>
                      <th width="10%">Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotData && pilotData.length > 0
                      ? pilotData.map(field => (
                          <tr key={field.name}>
                            <th>PHOTO IMG</th>
                            <td>{field.name}</td>
                            <td>{field.birth_year}</td>
                            <td>{field.gender}</td>
                            <td>{field.height}</td>
                          </tr>
                        ))
                      : 'No Pilot details.'}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
