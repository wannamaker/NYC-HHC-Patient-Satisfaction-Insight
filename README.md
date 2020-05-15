# NYC-HHC-Patient-Satisfaction-Insight
## Description
This app presents some insights about the NYC Health + Hospitals Corporation patient satisfaction scores based on a survey realized on 2009. It will present multiple  scores gathered from mulitiple hospitals, assembled into raw data from the  NYC Open Data API endpoints.

## API and Data Sample

https://data.cityofnewyork.us/resource/hi3x-y76v.json

```json
[
    {
        "hospital_name": "BELLEVUE HOSPITAL CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "56"
    },
    {
        "hospital_name": "CONEY ISLAND HOSPITAL",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "64"
    },
    {
        "hospital_name": "ELMHURST HOSPITAL CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "57"
    },
    {
        "hospital_name": "HARLEM HOSPITAL CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "61"
    },
    {
        "hospital_name": "JACOBI MEDICAL CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "63"
    },
    {
        "hospital_name": "KINGS COUNTY HOSPITAL CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "73"
    },
    {
        "hospital_name": "LINCOLN MEDICAL & MENTAL HEALTH CENTER",
        "hcahps_question": "How often were the patients rooms and bathrooms kept clean?",
        "hcahps_answer_description": "Room was \"always\" clean",
        "hcahps_answer_percent": "65"
    },
```

## Wireframes

[Wireframe](https://i.imgur.com/o2CucGE.png)

### MVP/PostMVP

#### MVP 
- Build layout (HTML and CSS)
- Use the mentioned external API 
- Render data on page using a drop down menu
- Display results from one hospital in the menu above using CSS flex or grid on the page 

#### PostMVP  
- Add second API
- Add categories in a drop dow menu per hospital
- Add Animation and Make the page responsive

## Project Schedule

Schedule I plan to work on this project 

|  Day | Deliverable | Status
|---|---| ---|
|May 8| Project Prompt | Incomplete
|May 9-10| Wireframes / Priority Matrix / Timeframes | complete
|May 11| Complete the layout: HTML, CSS | complete
|May 12| JavaScript coding / Loadind list of hospitals from drom down menu | complete
|May 13| Display information on the page  | complete
|May 14| Complete MVP and clean the code | complete
|May 15| Present | Incomplete

## Priority Matrix

[Priority Matrix](https://i.imgur.com/7LWksC5.png)

## Timeframes

Here is how I plan to spend my time for this project

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building layout | H | 8 hrs | 6 hrs | 6 hrs |
| Loading API | H | 7 hrs| 1 hrs | 1 hrs |
| Drop down menu | H |6 hrs| 6 hrs | 6 hrs |
| Display results | H | 6hrs | 18 hrs | 18 hrs |
| Total | H | 27 hrs| 31 hrs | 31 hrs |

# Code Snippet
```javascript
function displaySurvey(e) {
  e.preventDefault();

  const select = document.querySelector('#select-hospital');
  const value = select.value;

  //removing previously displayed data 
  deletePrevious();

  //chain reaaction for final result
  (async () => { survey(await getData(), value) })();
};

```

# Change Log
I originally wanted to create a second display based on the categories instead to the hospitals , but my squad leader advises me to take this part to the PMVP, I agreed. Unfortunately, as the time was passing, I opted to polish the design and to add some animation instead of doing that part. I didn’t have enough time to tweak my CSS and make the page responsive as well. 