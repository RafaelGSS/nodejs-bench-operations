## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,771|6386|
|Intl.DateTimeFormat().format(new Date())|14,427|7510|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,606|8304|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,445|8223|
|Reusing Intl.DateTimeFormat()|586,184|293093|
|Date.toLocaleDateString()|581,987|290994|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,499|8250|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:04:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12771.33282615462,"samples":6386},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14427.027750114059,"samples":7510},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16606.833271042236,"samples":8304},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16445.29794994666,"samples":8223},{"name":"Reusing Intl.DateTimeFormat()","opsSec":586184.7758872841,"samples":293093},{"name":"Date.toLocaleDateString()","opsSec":581987.8359884813,"samples":290994},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16499.491683631226,"samples":8250}]}-->
