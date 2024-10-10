## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,468|9235|
|Intl.DateTimeFormat().format(new Date())|17,846|8950|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,513|9257|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,278|9140|
|Reusing Intl.DateTimeFormat()|498,325|249219|
|Date.toLocaleDateString()|944,290|472146|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,600|11301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18468.795354354217,"samples":9235},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17846.196074533163,"samples":8950},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18513.57637234545,"samples":9257},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18278.667046484305,"samples":9140},{"name":"Reusing Intl.DateTimeFormat()","opsSec":498325.91753128066,"samples":249219},{"name":"Date.toLocaleDateString()","opsSec":944290.7082103112,"samples":472146},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22600.794202427714,"samples":11301}]}-->
