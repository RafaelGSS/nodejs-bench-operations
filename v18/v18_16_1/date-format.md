## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,042|76|
|Intl.DateTimeFormat().format(new Date())|6,104|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,737|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,019|71|
|Reusing Intl.DateTimeFormat()|426,584|90|
|Date.toLocaleDateString()|351,446|80|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,501|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5042.19822652876,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6103.603672097857,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5736.681449513852,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5019.119580250903,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":426584.21759409504,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":351446.39512612834,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6501.146034994636,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
