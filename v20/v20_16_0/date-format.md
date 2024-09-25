## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,994|9498|
|Intl.DateTimeFormat().format(new Date())|21,071|10536|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,843|10922|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,165|10583|
|Reusing Intl.DateTimeFormat()|893,643|446822|
|Date.toLocaleDateString()|893,671|446836|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,856|10929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:39:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18994.460840849213,"samples":9498},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21071.504145366616,"samples":10536},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21843.524990702168,"samples":10922},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21165.516833579775,"samples":10583},{"name":"Reusing Intl.DateTimeFormat()","opsSec":893643.1796370714,"samples":446822},{"name":"Date.toLocaleDateString()","opsSec":893671.2886379596,"samples":446836},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21856.225405631983,"samples":10929}]}-->
