## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,378|8190|
|Intl.DateTimeFormat().format(new Date())|19,808|9905|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,560|10781|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,341|8171|
|Reusing Intl.DateTimeFormat()|1,033,452|516727|
|Date.toLocaleDateString()|1,073,879|536940|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,398|11700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:14:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16378.983159967356,"samples":8190},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19808.77601572931,"samples":9905},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21560.854601160816,"samples":10781},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16341.6940508037,"samples":8171},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1033452.4477546631,"samples":516727},{"name":"Date.toLocaleDateString()","opsSec":1073879.5811872436,"samples":536940},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23398.223747241536,"samples":11700}]}-->
