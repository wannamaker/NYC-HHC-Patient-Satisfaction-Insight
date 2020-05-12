

const getHospital = async () => {

  const url = "https://data.cityofnewyork.us/resource/hi3x-y76v.json";

  try {

    const response = await axios.get(url);
    console.log(response.data.length);
    console.log(response.data);
    console.log(response);

    dataArray = response.data;

    console.log(dataArray[0]['hospital_name']);


  } catch (error) {
    console.log(`${error}`);
  }

}

hospitalName = [
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

getHospital();

console.log(hospitalName.length);
