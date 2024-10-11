## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,735|8869|
|Intl.DateTimeFormat().format(new Date())|17,648|8825|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,496|9249|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,237|9119|
|Reusing Intl.DateTimeFormat()|436,901|277862|
|Date.toLocaleDateString()|756,086|378073|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,668|10336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:14:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17735.81803325064,"samples":8869},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17648.105934678668,"samples":8825},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18496.34620469315,"samples":9249},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18237.760246403803,"samples":9119},{"name":"Reusing Intl.DateTimeFormat()","opsSec":436901.73826251825,"samples":277862},{"name":"Date.toLocaleDateString()","opsSec":756086.7454817566,"samples":378073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20668.978195387834,"samples":10336}]}-->
