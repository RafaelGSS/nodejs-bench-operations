## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,962|83|
|Intl.DateTimeFormat().format(new Date())|15,022|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,990|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,338|77|
|Reusing Intl.DateTimeFormat()|797,134|98|
|Date.toLocaleDateString()|820,734|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,420|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15962.314598180494,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15021.790156912846,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16989.986566069107,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17337.743287350593,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":797133.5746031706,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":820734.2853009058,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17420.206371605826,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
