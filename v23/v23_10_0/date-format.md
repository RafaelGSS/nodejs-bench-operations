## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,741|10371|
|Intl.DateTimeFormat().format(new Date())|20,192|10097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,059|10030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,216|9609|
|Reusing Intl.DateTimeFormat()|588,102|294053|
|Date.toLocaleDateString()|1,087,141|543814|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,772|12389|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10371,"opsSec":20741.401403155505},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10097,"opsSec":20192.41218985986},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10030,"opsSec":20059.05521849921},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9609,"opsSec":19216.668015873147},{"name":"Reusing Intl.DateTimeFormat()","samples":294053,"opsSec":588102.384346541},{"name":"Date.toLocaleDateString()","samples":543814,"opsSec":1087141.6432687675},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12389,"opsSec":24772.99446782981}]}-->
