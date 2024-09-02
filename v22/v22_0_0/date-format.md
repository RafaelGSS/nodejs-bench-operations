## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|24,067|12034|
|Intl.DateTimeFormat().format(new Date())|22,501|11251|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,136|11569|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,893|11447|
|Reusing Intl.DateTimeFormat()|640,543|320272|
|Date.toLocaleDateString()|643,525|321763|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,919|11960|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:07:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":24067.993886727745,"samples":12034},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22501.53822343031,"samples":11251},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23136.580431974588,"samples":11569},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22893.334170268703,"samples":11447},{"name":"Reusing Intl.DateTimeFormat()","opsSec":640543.8693286686,"samples":320272},{"name":"Date.toLocaleDateString()","opsSec":643525.1209452722,"samples":321763},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23919.33939568605,"samples":11960}]}-->
