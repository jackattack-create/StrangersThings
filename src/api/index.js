const base_url = "https://strangers-things.herokuapp.com/api/";
const Cohort = "2108-LSU-RM-WEB-PT";
const Api_url = base_url + Cohort;

export const callAPI = async ({ url, method, token, body }) => {
  console.log("callApi: ", { url, method, token, body });

  try {
    const options = {
      //if a method is pass through convert it to upper case, otherwise deault method to GET
      method: method ? method.toUpperCase() : "GET",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(Api_url + url, options);
    const data = await response.json();
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error("ERROR: ", error);
  }
};
