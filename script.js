

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

const select = document.querySelector('select')

hospitalName.forEach((hospital) => {
  const option = document.createElement('option')
  option.value = `${hospital}`
  option.text = `${hospital}`
  select.append(option);
})



const getData = async () => {

  const url = "https://data.cityofnewyork.us/resource/hi3x-y76v.json";

  try {

    const response = await axios.get(url);

    let dataArray = response.data;
    return dataArray;
  } catch (error) {
    console.log(`${error}`);
  }

}

//getData();

function deletePrevious() {

  let divEle = document.querySelector('.append-data');
  while (divEle.lastChild) {
    divEle.removeChild(divEle.lastChild)
  }
}



function boardingData(arrObj) {

  const newDiv = document.createElement('div');
  for (let i = 0; i < arrObj.length; i++) {
    let ele = arrObj[i];
    const newP = document.createElement('p');
    for (let k in ele) {
      if (k !== 'hospital_name') {
        newP.innerHTML += `${ele[k]}  <br>`
      }
    }
    newDiv.appendChild(newP);
  }
  document.querySelector('.append-data').appendChild(newDiv)
};


function survey(arr, str) {

  let hospArray = [];
  let hospitalSurvey = [];
  let hospital = str;
  for (let j = 0; j < 110; j++) {
    for (let k in arr[j]) {

      if ((k === 'hospital_name') && (arr[j].hospital_name === hospital)) {
        hospArray.push(arr[j]);
      }
    }
  }



  boardingData(hospArray);
};

function displaySurvey(e) {
  e.preventDefault();

  const select = document.querySelector('#select-hospital');
  const value = select.value;
  //console.log(value);
  deletePrevious();
  (async () => { survey(await getData(), value) })();
};

const form = document.querySelector('form')
form.addEventListener('submit', displaySurvey)