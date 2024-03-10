## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,847|81|
|Intl.DateTimeFormat().format(new Date())|10,841|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,093|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,073|76|
|Reusing Intl.DateTimeFormat()|613,928|83|
|Date.toLocaleDateString()|615,406|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,338|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9847.311157901442,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10840.86481618235,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13092.980656842452,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10073.186166166146,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":613927.6097228979,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":615406.4002533448,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13337.8838018848,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
