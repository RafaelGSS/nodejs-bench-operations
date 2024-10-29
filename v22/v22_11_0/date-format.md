## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,164|9583|
|Intl.DateTimeFormat().format(new Date())|19,139|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,163|9582|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,057|9210|
|Reusing Intl.DateTimeFormat()|606,398|303387|
|Date.toLocaleDateString()|1,103,192|551736|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,412|11707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19164.043351173845,"samples":9583},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19139.90980127547,"samples":9572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19163.591470557032,"samples":9582},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18057.328772061235,"samples":9210},{"name":"Reusing Intl.DateTimeFormat()","opsSec":606398.0889734606,"samples":303387},{"name":"Date.toLocaleDateString()","opsSec":1103192.1223649401,"samples":551736},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23412.304059518538,"samples":11707}]}-->
