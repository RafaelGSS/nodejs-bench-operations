## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,783|83|
|Intl.DateTimeFormat().format(new Date())|19,218|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,135|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,419|83|
|Reusing Intl.DateTimeFormat()|692,943|86|
|Date.toLocaleDateString()|788,152|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,053|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16783.155040540678,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19217.62973272406,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16134.817087016814,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17419.3866168038,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":692943.0641317979,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":788151.7795957364,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20052.616249230956,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
