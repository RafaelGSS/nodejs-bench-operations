## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,093|9547|
|Intl.DateTimeFormat().format(new Date())|20,111|10056|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,189|11095|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,636|10819|
|Reusing Intl.DateTimeFormat()|920,668|460335|
|Date.toLocaleDateString()|904,369|452185|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,680|10841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19093.40745519683,"samples":9547},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20111.771811836377,"samples":10056},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22189.52989261667,"samples":11095},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21636.00156908968,"samples":10819},{"name":"Reusing Intl.DateTimeFormat()","opsSec":920668.2139051806,"samples":460335},{"name":"Date.toLocaleDateString()","opsSec":904369.4175865625,"samples":452185},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21680.215111249996,"samples":10841}]}-->
