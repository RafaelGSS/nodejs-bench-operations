## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,090|9546|
|Intl.DateTimeFormat().format(new Date())|19,098|9550|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,590|9297|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,655|9328|
|Reusing Intl.DateTimeFormat()|452,681|287525|
|Date.toLocaleDateString()|724,525|362466|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,222|11612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:27:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19090.94480529872,"samples":9546},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19098.65343034124,"samples":9550},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18590.54520744083,"samples":9297},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18655.57301124492,"samples":9328},{"name":"Reusing Intl.DateTimeFormat()","opsSec":452681.0495476377,"samples":287525},{"name":"Date.toLocaleDateString()","opsSec":724525.9539196448,"samples":362466},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23222.176362490256,"samples":11612}]}-->
