## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|80|
|Intl.DateTimeFormat().format(new Date())|8,324|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,625|64|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,719|96|
|Reusing Intl.DateTimeFormat()|510,310|73|
|Date.toLocaleDateString()|515,294|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,163|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7800.150973792958,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8323.984726923129,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6625.02357728324,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10719.163954853648,"samples":7},{"name":"Reusing Intl.DateTimeFormat()","opsSec":510310.1897946742,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":515293.99554117233,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9163.127562192905,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
