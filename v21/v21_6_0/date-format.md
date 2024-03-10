## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,139|79|
|Intl.DateTimeFormat().format(new Date())|18,138|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,497|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,734|78|
|Reusing Intl.DateTimeFormat()|688,391|87|
|Date.toLocaleDateString()|791,739|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,847|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16139.479316031033,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18137.86851861317,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15496.830035767467,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16733.94856405001,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":688391.2531903215,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":791738.7100514396,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18847.3572947874,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
