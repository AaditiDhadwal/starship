import React from 'react';

export default function Starships() {
  return (
    <React.Fragment>
      <header className="main-header">
        <div className="container">
          <h1>SharsShip</h1>
        </div>
      </header>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">All Ships</h3>
            <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th width="10%">ID</th>
                    <th width="40%">Ship Name</th>
                    <th width="15%">Model</th>
                    <th width="15%">Number of Pilots</th>
                    <th width="20%">Manufacturer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Death Star</td>
                    <td>DS-1 Orbital Battle Station</td>
                    <td>1000</td>
                    <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


