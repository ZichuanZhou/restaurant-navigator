export const searchRestaurant = (category, cuisine) => {
  return new Promise((resolve, reject) => {
    let header = {
      method: "GET",
      headers: {
        "user-key": "3c5a34db21cc766a8f32bfdb50085d74",
        Accept: "application/json"
      }
    };

    let reqURL;
    if (category !== "" && cuisine !== "") {
      reqURL =
        "https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=" +
        cuisine +
        "&category=" +
        category;
    } else if (category !== "") {
      reqURL =
        "https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&&category=" +
        category;
    } else if (cuisine !== "") {
      reqURL =
        "https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&&cuisines=" +
        cuisine;
    }
    console.log(reqURL);

    fetch(reqURL, header)
      .then(response => response.json())
      .then(data => {
        resolve(data.restaurants);
      });
  });
};

export const filterRestaurant = () => {
  
};
