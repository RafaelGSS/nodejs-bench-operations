## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,260|8631|
|Intl.DateTimeFormat().format(new Date())|19,856|9929|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,059|11030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,465|10733|
|Reusing Intl.DateTimeFormat()|669,220|334611|
|Date.toLocaleDateString()|692,390|346196|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,350|10676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17260.76261131604,"samples":8631},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19856.771741085508,"samples":9929},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22059.210502106882,"samples":11030},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21465.72103180423,"samples":10733},{"name":"Reusing Intl.DateTimeFormat()","opsSec":669220.1690489129,"samples":334611},{"name":"Date.toLocaleDateString()","opsSec":692390.1455184206,"samples":346196},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21350.31255713024,"samples":10676}]}-->
