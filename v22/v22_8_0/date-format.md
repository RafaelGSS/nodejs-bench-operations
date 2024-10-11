## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,794|9404|
|Intl.DateTimeFormat().format(new Date())|18,475|9238|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,852|8927|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,427|9215|
|Reusing Intl.DateTimeFormat()|498,425|249225|
|Date.toLocaleDateString()|948,975|474489|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,807|11404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:53:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18794.332723654694,"samples":9404},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18475.27192648392,"samples":9238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17852.354976898296,"samples":8927},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18427.91278088679,"samples":9215},{"name":"Reusing Intl.DateTimeFormat()","opsSec":498425.3787831389,"samples":249225},{"name":"Date.toLocaleDateString()","opsSec":948975.5136841541,"samples":474489},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22807.59594063032,"samples":11404}]}-->
