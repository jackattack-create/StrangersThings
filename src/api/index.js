export const base_url = "https://strangers-things.herokuapp.com/api/";
export const Cohort = "2108-LSU-RM-WEB-PT";
export const Api_url = base_url + Cohort;

//when we call this api we should be specifing where this data is coming from/going to,
//the method (POST, GET) of the request, a token (if there is one) for account actions
//and the body of what data the user if trying to pass through
export const callAPI = async ({ url, method, token, body }) => {
  console.log("callApi: ", { url, method, token, body });

  try {
    const options = {
      //if a method is pass through convert it to upper case, otherwise deault method to GET
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    console.log("Call API Request URL: ", Api_url + url);
    console.log("Call API Options: ", options);

    const response = await fetch(Api_url + url, options);
    const data = await response.json();
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error("ERROR: ", error);
  }
};
