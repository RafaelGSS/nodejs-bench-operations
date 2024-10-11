## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,389|9195|
|Intl.DateTimeFormat().format(new Date())|18,307|9154|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,406|9204|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,949|8975|
|Reusing Intl.DateTimeFormat()|448,686|224344|
|Date.toLocaleDateString()|940,424|470584|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,741|10871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:54:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18389.541806176356,"samples":9195},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18307.60389668209,"samples":9154},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18406.707370568194,"samples":9204},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17949.04310061422,"samples":8975},{"name":"Reusing Intl.DateTimeFormat()","opsSec":448686.51664237597,"samples":224344},{"name":"Date.toLocaleDateString()","opsSec":940424.9758691156,"samples":470584},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21741.984911062475,"samples":10871}]}-->
