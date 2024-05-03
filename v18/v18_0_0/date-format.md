## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,539|84|
|Intl.DateTimeFormat().format(new Date())|8,467|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,468|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,047|93|
|Reusing Intl.DateTimeFormat()|564,926|80|
|Date.toLocaleDateString()|739,304|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,746|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:27:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11538.922448973073,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8466.762640107847,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13467.935380751727,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15047.009497231902,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":564926.120669956,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":739303.8499273668,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13746.252855543107,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
