## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,782|82|
|Intl.DateTimeFormat().format(new Date())|16,378|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,059|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,169|96|
|Reusing Intl.DateTimeFormat()|680,270|84|
|Date.toLocaleDateString()|795,312|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,396|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15781.737339317859,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16377.890433745964,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18058.749354435855,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19168.90845935912,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":680269.6291352476,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":795312.0805693568,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17396.16447909511,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
