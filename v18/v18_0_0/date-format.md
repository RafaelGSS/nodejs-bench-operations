## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,184|6093|
|Intl.DateTimeFormat().format(new Date())|12,028|6016|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,678|6340|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,324|6163|
|Reusing Intl.DateTimeFormat()|633,819|316991|
|Date.toLocaleDateString()|656,819|328413|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,338|6170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:25:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12184.406864433662,"samples":6093},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12028.082213061562,"samples":6016},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12678.582458409654,"samples":6340},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":12324.26587719695,"samples":6163},{"name":"Reusing Intl.DateTimeFormat()","opsSec":633819.05146006,"samples":316991},{"name":"Date.toLocaleDateString()","opsSec":656819.8784387329,"samples":328413},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12338.446515553012,"samples":6170}]}-->
