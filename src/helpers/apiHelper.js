import axios from 'axios';

const getAllDigimon = async () => {
  const url = 'https://digi-api.com/api/v1/digimon';
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
const getDigimonsByPage = async (page, pageSize) => {
  const url = `https://digi-api.com/api/v1/digimon?page=${page}&pageSize=${pageSize}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getDigimonById = async id => {
  const url = `https://digi-api.com/api/v1/digimon/${id}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
const getDigimonNextpage = async (previousPage, pageSize) => {
  const url = `https://digi-api.com/api/v1/digimon?page=${
    page + 1
  }&pageSize=${pageSize}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export {getAllDigimon, getDigimonsByPage, getDigimonById, getDigimonNextpage};
