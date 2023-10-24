## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,107|84|
|Intl.DateTimeFormat().format(new Date())|12,403|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,850|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,005|96|
|Reusing Intl.DateTimeFormat()|459,894|95|
|Date.toLocaleDateString()|524,034|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,665|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13107.023255716365,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12403.045261384717,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12850.135399477957,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16005.061705144575,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":459894.238611171,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":524034.15555264946,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14665.328792679553,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
