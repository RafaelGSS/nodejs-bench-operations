## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,347|10674|
|Intl.DateTimeFormat().format(new Date())|20,684|10343|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,216|10609|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,648|10825|
|Reusing Intl.DateTimeFormat()|647,389|323695|
|Date.toLocaleDateString()|669,078|334540|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,281|10641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:38:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21347.43877548772,"samples":10674},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20684.64958038248,"samples":10343},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21216.203284887364,"samples":10609},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21648.32390059334,"samples":10825},{"name":"Reusing Intl.DateTimeFormat()","opsSec":647389.5636087818,"samples":323695},{"name":"Date.toLocaleDateString()","opsSec":669078.7059716778,"samples":334540},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21281.581349250224,"samples":10641}]}-->
