## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,237|7619|
|Intl.DateTimeFormat().format(new Date())|13,147|7285|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,893|10947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,592|8797|
|Reusing Intl.DateTimeFormat()|1,025,970|512986|
|Date.toLocaleDateString()|1,065,141|532571|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,252|10627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15237.335682638897,"samples":7619},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13147.084663662861,"samples":7285},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21893.022520330363,"samples":10947},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17592.510336593754,"samples":8797},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1025970.4097459741,"samples":512986},{"name":"Date.toLocaleDateString()","opsSec":1065141.6527628792,"samples":532571},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21252.90335018959,"samples":10627}]}-->
