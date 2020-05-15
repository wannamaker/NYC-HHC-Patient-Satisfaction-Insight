

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


function deletePrevious() {

  let divEle = document.querySelector('.append-data');
  while (divEle.lastChild) {
    divEle.removeChild(divEle.lastChild)
  }
}



function boardingData(arrObj) {

  const newDiv = document.createElement('div');

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  //creates first row
  let arr = ['Question', 'Answer Description', 'Answer In Percentage'];
  let row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    // creating all cells
    let cell = document.createElement("td");
    let cellText = document.createTextNode(`${arr[i]}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);



  for (let i = 0; i < arrObj.length; i++) {
    let ele = arrObj[i];
    // creates a table row
    row = document.createElement("tr");

    for (let k in ele) {
      let cell = document.createElement("td");
      if (k !== 'hospital_name') {
        let cellText = document.createTextNode(`${ele[k]}`);

        cell.appendChild(cellText);
        row.appendChild(cell);

      }
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>

  newDiv.appendChild(tbl);
  document.querySelector('.append-data').appendChild(newDiv)
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
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

  deletePrevious();
  (async () => { survey(await getData(), value) })();
};

let bkgImg = document.querySelector('.img-container');
function changeImages() {
  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/JZNwj2d.jpg)';  //Kings County
  }, 5500);

  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/AEC65zy.jpg)';  //Elmhurst
  }, 5500);

  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/L2hsaNM.jpg)';   //metropolitan
  }, 7500);

  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/1l9bNsM.jpg)';   //Bellevue
  }, 9500);

  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/lt70naT.jpg)';  //coney-Island
  }, 11500);

  setInterval(function () {
    bkgImg.style.backgroundImage = 'url(https://i.imgur.com/ptHFM4f.png)';  //HHC-HQ
  }, 13500);
};

adText = document.querySelector('.p-aside')

function adAnimation() {
  setInterval(function () {
    adText.style.color = 'whitesmoke';
  }, 500);

  setInterval(function () {
    adText.style.color = 'black';
  }, 1000);
}

changeImages();
adAnimation();
const form = document.querySelector('form')
form.addEventListener('submit', displaySurvey)