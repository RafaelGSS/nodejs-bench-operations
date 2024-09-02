## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,156|11579|
|Intl.DateTimeFormat().format(new Date())|20,245|10123|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,767|11384|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,047|11024|
|Reusing Intl.DateTimeFormat()|659,056|329529|
|Date.toLocaleDateString()|649,642|324822|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,920|11461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:06:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23156.374515133637,"samples":11579},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20245.978296307825,"samples":10123},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22767.164445062866,"samples":11384},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22047.626072263643,"samples":11024},{"name":"Reusing Intl.DateTimeFormat()","opsSec":659056.673976878,"samples":329529},{"name":"Date.toLocaleDateString()","opsSec":649642.5473987912,"samples":324822},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22920.886915889674,"samples":11461}]}-->
