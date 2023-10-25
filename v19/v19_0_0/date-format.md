## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,180|80|
|Intl.DateTimeFormat().format(new Date())|7,432|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,645|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,343|92|
|Reusing Intl.DateTimeFormat()|343,757|78|
|Date.toLocaleDateString()|416,523|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,171|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6180.027605202336,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7432.060610031819,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5645.30931066347,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9342.86391892148,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":343756.6917806138,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":416522.7243717482,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9171.077142407665,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
