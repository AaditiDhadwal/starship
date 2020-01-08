import axios from 'axios';
import { API_STAR_SHIP } from '../constants/ApiConstants';

export async function getStarShip() {
  return await axios
    .get(API_STAR_SHIP)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function getShipDetails() {
  const id = window.location.pathname.split('/')[2];

  return await axios
    .get(API_STAR_SHIP + id + '/')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function getPilotData(pilot) {
  return await axios
    .get(pilot)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export async function getAllPilots(pilotList) {
  return await axios
    .all(pilotList)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
}
