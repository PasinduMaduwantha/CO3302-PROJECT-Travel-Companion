import axios from "axios";

export const getPlaceData = async (type, sw, ne) => {
  try {
    console.log("type", type);
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "3e4d03ecf7mshd93de51a36414afp18f255jsne11e5e0432f9",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get(
//         "https://community-open-weather-map.p.rapidapi.com/find",
//         {
//           params: { lat: lat, lon: lng },
//           headers: {
//             "x-rapidapi-key":
//               "3e4d03ecf7mshd93de51a36414afp18f255jsne11e5e0432f9",
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//           },
//         }
//       );

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
