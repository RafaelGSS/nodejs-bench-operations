## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,769|84|
|Intl.DateTimeFormat().format(new Date())|17,370|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,767|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,248|77|
|Reusing Intl.DateTimeFormat()|691,639|98|
|Date.toLocaleDateString()|721,377|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,622|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:11:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18768.73360648624,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17370.261345471903,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17766.754776808455,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21248.149297243348,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":691638.8036586964,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":721377.2015299452,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18621.65685825323,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
