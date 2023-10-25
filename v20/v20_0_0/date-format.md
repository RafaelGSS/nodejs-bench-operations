## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,834|85|
|Intl.DateTimeFormat().format(new Date())|5,801|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,446|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,442|90|
|Reusing Intl.DateTimeFormat()|348,758|81|
|Date.toLocaleDateString()|405,867|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,375|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4833.664124540381,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5800.811980176461,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5445.738453651324,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6442.352618191858,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":348757.90868272877,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":405867.22507356177,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6374.686782462092,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
