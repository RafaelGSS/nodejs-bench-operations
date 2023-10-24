## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,737|79|
|Intl.DateTimeFormat().format(new Date())|5,134|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,119|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,665|77|
|Reusing Intl.DateTimeFormat()|315,921|74|
|Date.toLocaleDateString()|385,148|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,583|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4736.715467575922,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5133.783959016318,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6118.589088995068,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5664.970828394802,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":315921.4290378312,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":385148.1832046572,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6582.733358050704,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
