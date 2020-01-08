import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { getStarShip } from '../Api/StarShipsAPI';
import PageLoader from '../common/PageLoader';

export default function Starships() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const getStarShipList = () => {
    getStarShip().then(response => {
      setData(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (isLoading || (data && Object.keys(data).length === 0)) {
      getStarShipList();
    }
  }, [isLoading, data]);

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
              <h3 className="mb-3">All Ships</h3>
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th width="10%">ID</th>
                      <th width="20%">Ship Name</th>
                      <th width="15%">Model</th>
                      <th width="5%">Number of Pilots</th>
                      <th width="20%">Manufacturer</th>
                      <th width="20%">Starship Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.results &&
                      data.results.map((field, index) => (
                        <tr
                          key={field.model}
                          onClick={() =>
                            history.push('/ship-detail/' + (index + 1) + '/')
                          }
                        >
                          <td>{index + 1}</td>
                          <td>{field.name}</td>
                          <td>{field.model}</td>
                          <td>
                            {field.pilots && field.pilots.length
                              ? field.pilots.length
                              : 0}
                          </td>
                          <td>{field.manufacturer}</td>
                          <td>{field.starship_class}</td>
                        </tr>
                      ))}
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
