var axios = require("axios").default;
// need to find way to not do zip codes

const findHomes = (zipcode) => {
  var options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      offset: "0",
      limit: "100",
      postal_code: zipcode,
      sort: "relevance",
    },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": "1547880da5msh516cf9307851d4ep1b9128jsned839e804a7b",
    },
  };
  return axios.request(options);
};

export default findHomes;
