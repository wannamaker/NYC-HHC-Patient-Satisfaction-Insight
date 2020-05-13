


let hospitalName = [
  "BELLEVUE HOSPITAL CENTER",
  "CONEY ISLAND HOSPITAL",
  "ELMHURST HOSPITAL CENTER",
  "HARLEM HOSPITAL CENTER",
  "JACOBI MEDICAL CENTER",
  "KINGS COUNTY HOSPITAL CENTER",
  "LINCOLN MEDICAL & MENTAL HEALTH CENTER",
  "METROPOLITAN HOSPITAL CENTER",
  "NORTH CENTRAL BRONX HOSPITAL",
  "QUEENS HOSPITAL CENTER",
  "WOODHULL MEDICAL AND MENTAL HEALTH CENTER"
]


const getData = async () => {

  const url = "https://data.cityofnewyork.us/resource/hi3x-y76v.json";

  try {

    const response = await axios.get(url);

    let dataArray = response.data;

  } catch (error) {
    console.log(`${error}`);
  }
  return dataArray;
}

getData();


function survey(arr, str) {
  let hospitalObj = {};
  let hospArrayObj = [];
  let hospArray1 = [];
  let hospitalSurvey = [];
  let hospital = str;
  for (let j = 0; j < 110; j++) {
    for (let k in arr[j]) {
      let buffer;
      if ((k === 'hospital_name') && (arr[j].hospital_name === hospital)) {
        hospArray1.push(dataArray[j]);
      }
    }
  } hospitalObj[hospital] = hospArray1;
  return hospitalObj;
};