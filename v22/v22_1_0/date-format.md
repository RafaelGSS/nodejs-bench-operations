## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,747|79|
|Intl.DateTimeFormat().format(new Date())|17,964|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,028|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,113|79|
|Reusing Intl.DateTimeFormat()|1,005,121|86|
|Date.toLocaleDateString()|1,178,821|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,862|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:36:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17747.344851079517,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17963.801204840453,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21028.245150117342,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18113.377460215906,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1005121.473992268,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":1178821.0593873744,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20862.495193080107,"samples":8},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
