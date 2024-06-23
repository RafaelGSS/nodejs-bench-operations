## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,250|8126|
|Intl.DateTimeFormat().format(new Date())|15,711|7856|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,838|10920|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,706|9354|
|Reusing Intl.DateTimeFormat()|1,034,350|517176|
|Date.toLocaleDateString()|1,089,885|544943|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,878|10940|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16250.681029724938,"samples":8126},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15711.761998229123,"samples":7856},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21838.23547057297,"samples":10920},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18706.845263854844,"samples":9354},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1034350.0823152069,"samples":517176},{"name":"Date.toLocaleDateString()","opsSec":1089885.925887957,"samples":544943},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21878.723157716657,"samples":10940}]}-->
