## CS3012 Software Engineering Assignment 5: **Social Graph Project**  

Written by  
Can ZHOU (19324118)  
If there has any confusion, Please email me: zhouc@tcd.ie

## Introduction
- This is the social graph project to build visualisation of data available that elucidates some aspect of the softare engineering process.
- I chose D3 to analyse and build visualisation.
- I figured out those aspects:
    - Issues information between developers and D3 repos.
    - Commit information in main D3 repo which is analysed by each year and each month.  
    - Fork information for most five popular D3 sub-repos.
    - Star information for most five popular D3 sub-repos.
    - Disk usage information for most five popular D3 sub-repos.
- Reasons:
    - Each software engineering project will have issues in the building process. So, it is useful to gain some issue information.
    - Analysing commit in each month and each year can let us know more developers' coding habits and repo/project construction status every year and month.
    - Gain star/fork information can show which sub-repo is more popular and have more developers to involve the project.
    - Gain disk usage information can show the disk space for the sub-repo, so the developers can manage the projects better.
    - Because many D3 sub-repos have a lot of useless data, I selected some repo and data for analysis.
- **More details: I have built a live demo websit to show the work: [Live Demo](https://can-zhou.github.io/CS3012/index.html)**

## [Live Demo](https://can-zhou.github.io/CS3012/index.html)
### I have built a websit to show the work. Click here for **[Live Demo](https://can-zhou.github.io/CS3012/index.html)**

![0_0](https://github.com/Can-ZHOU/Picture-Reference/blob/master/0_0.gif)
![0_1](https://github.com/Can-ZHOU/Picture-Reference/blob/master/0_1.gif)
![0_2](https://github.com/Can-ZHOU/Picture-Reference/blob/master/0_2.gif)

### Zoomable Sunburst Graph: [Quick Link](https://can-zhou.github.io/CS3012/Zoomable_Sunburst.html)
- The D3 sub-repos which star number is in the top five in total.
- Showing the latest 3 people's name who fork, submit issue, star to those repos (2019-11-29).
    - The innermost layer is D3.
    - The second layer shows the names of these five repos.
    - The third layer is the classification of Fork, Issue, and Stargazers.
    - The fourth layer shows the name of the person who performed these actions.
- It has zoomable function as well:
    - Click on arc in order to zoom in.
    - Click on the center circle to zoom out.
    - Avoid clicking text when click.
- ![1](https://github.com/Can-ZHOU/Picture-Reference/blob/master/1.gif)

### Radial Tidy Tree Graph: [Quick Link](https://can-zhou.github.io/CS3012/Radial_Tidy_Tree.html)
- The issues of first ten repos of D3 are shown.
- It displays the latest issue information of each repo.
- For each issue, it describes:
   - The issue number.
   - Whether issue is locked?
   - Issue current state.
   - Who submitted this issue.
- ![2](https://github.com/Can-ZHOU/Picture-Reference/blob/master/2.gif)

### Charts -- Overview: [Quick Link](https://can-zhou.github.io/CS3012/Pie_Chart_Sum.html)
- In this part, I use pie and donut charts to show the overview information I collected.
- The upper chart shows the value and underlayer shows the percentage.
- This is a flowing chart.  
  With this order:
    - Fork Count pie chart.
    - Disk Usage pie chart.
    - Start Count pie chart.
    - Commit by each year pie chart.
    - Commit by each month pie chart.
    - Fork Count donut chart.
    - Disk Usage donut chart.
    - Start Count donut chart.
    - Commit by each year donut chart.
    - Commit by each month donut chart.
- Charts have those functions as well:
    - Mouse over the sector / arc to focus on specific data.
    - Mouse over the legend below each chart to focus on specific data.
    - Click on the legend below each chart to hide specific data.
- ![3](https://github.com/Can-ZHOU/Picture-Reference/blob/master/3.gif)

### Charts -- Commit Analysis: [Quick Link](https://can-zhou.github.io/CS3012/Commit.html)
- Line, bar and pie charts show the D3 main repo's commit by each month and year.
- Line and bar charts show the commit number of each year and month.
- Pie charts show the comparation between each year and month.
- Charts have those functions as well:
    - Mouse over the point in line/bar to show the tooltip.
    - Mouse over the sector to focus on specific data.
    - Mouse over the legend below each chart to focus on specific data.
    - Click on the legend below each chart to hide specific data.
- ![7](https://github.com/Can-ZHOU/Picture-Reference/blob/master/7.gif)

### Charts -- Star Count: [Quick Link](https://can-zhou.github.io/CS3012/Pie_Chart_Star_Count.html)
- Pie and donut charts show the total stars number of D3 sub-repos which have the top five star number.
- The upper chart shows the value and underlayer shows the percentage.
- Charts have those functions as well:
    - Mouse over the sector / arc to focus on specific data.
    - Mouse over the legend below each chart to focus on specific data.
    - Click on the legend below each chart to hide specific data.
- ![4](https://github.com/Can-ZHOU/Picture-Reference/blob/master/4.gif)

### Charts -- Fork Count: [Quick Link](https://can-zhou.github.io/CS3012/Pie_Chart_Fork_Count.html)
- Pie and donut charts show the total fork count of D3 sub-repos which have the top five star number.
- The upper chart shows the value and underlayer shows the percentage.
- Charts have those functions as well:
    - Mouse over the sector / arc to focus on specific data.
    - Mouse over the legend below each chart to focus on specific data.
    - Click on the legend below each chart to hide specific data.
- ![5](https://github.com/Can-ZHOU/Picture-Reference/blob/master/5.gif)

### Charts -- Disk Usage: [Quick Link](https://can-zhou.github.io/CS3012/Pie_Chart_Disk_Usage.html)
- Pie and donut charts show the total disk usage of D3 sub-repos which have the top five star number.
- The upper chart shows the value and underlayer shows the percentage.
- Charts have those functions as well:
    - Mouse over the sector / arc to focus on specific data.
    - Mouse over the legend below each chart to focus on specific data.
    - Click on the legend below each chart to hide specific data.
- ![6](https://github.com/Can-ZHOU/Picture-Reference/blob/master/6.gif)


## Part One - GitHub Access
### Get data from GitHub 
- I use Github GraphQL API with Node.js.
- Using node-fetch to make HTTP requests with Node.js.
- I have gained four JSON files for different aspects of D3 project information.

## Part Two - Social Graph
### Analyse data  
- This part is to analyze raw JOSN file and change the format of JSON file which is more suitable for data visualization.
- About output file:
  - The output file is the JSON file.
  - I **intentionally** changed the output file from a JSON file to a JavaScript file.
  - Because the JavaScript cannot directly read the JSON file at the front end, it needs to interact with the backend.
  - I want to avoid interaction with the backend (avoiding operations like using AJAX and database)
  - So I output the JavaScript file directly. When we need to call JSON data, we can directly reference the output JavaScript file to gain the JSON data.
- I have analysed data about:  
    1. Commits in D3 main repo with years and month.
    2. Forks with comparing five D3 sub-repo.
    3. Stars with comparing five D3 sub-repo.
    4. Disk usage with comparing five D3 sub-repo.
    5. Some issue data in D3.

### Data visualisation [A live demo is in showcase part]
- I have visualized those data:
    1. Commits in D3 main repo with years and month.
    2. Forks with comparing five D3 sub-repo.
    3. Stars with comparing five D3 sub-repo.
    4. Disk usage with comparing five D3 sub-repo.
    5. Some issue data in D3.
- In those formats:
    1. Pie, line, bar and donut charts.
    2. Radial tidy tree.
    3. zoomable sunburst.
- Using D3.js and C3.js [A JavaScript library dependent on D3]

### Showcase
- A websit for live demo.
- Click here for **[Live Demo](https://can-zhou.github.io/CS3012/index.html)**

## Run the code
### Run the code in Get_data_from_GitHub
- Please make sure you have installed the Node.js.  
      If not, please download and install the Node.js: [Download Node.js](https://nodejs.org/en/)
- Get your personal access token from GitHub: [Instruction](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)   
- Replace the `accessToken_has_been_deleted` in
      **app.js--line #4** (`const accessToken = 'accessToken_has_been_deleted';`)   
      with your personal GitHub access token.
- Open the terminal where the downloaded file is located.
- In terminal, type: `node app.js`
- The data will be stored in three JSON files.

### Run the code in Analyse_data 
- Please make sure you have installed the Node.js.  
  If not, please download and install the Node.js: [Download Node.js](https://nodejs.org/en/)
- Go to each floder.
- Open the terminal where the downloaded file is located.
- In terminal, type: `node app.js`
- The data will be analysed and stored in three JavaScript files.

### Run the code in Data_visualisation
- Download and click all HTML files.

### Run the code in Showcase
- Click here for **[Live Demo](https://can-zhou.github.io/CS3012/index.html)**

## Librarys & Reference
- **[D3.js](https://d3js.org/)**
- **[C3.js](https://c3js.org/)** [ D3-based reusable chart library ]
- **[Sunburst Example](https://codepen.io/denjn5/pen/bwwoAy)** [ I have learnt and moidied code from this websit ]
- **[Radial Tidy Tree Example](https://bl.ocks.org/FrissAnalytics/ffbd3cb71848616957cd4c0f41738aec)** [ I have learnt and moidied code from this websit ]