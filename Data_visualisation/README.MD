## CS3012 Software Engineering Assignment 5: **Social Graph Project**  

Written by  
Can ZHOU (19324118)  
If there has any confusion, Please email me: zhouc@tcd.ie

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

### Run the code
- Run the code in Data_visualisation
    - Download and click the HTML file in each folder.