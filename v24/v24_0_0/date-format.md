## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,065|11034|
|Intl.DateTimeFormat().format(new Date())|21,367|10685|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,027|10514|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,573|9787|
|Reusing Intl.DateTimeFormat()|416,613|208321|
|Date.toLocaleDateString()|1,068,096|534160|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,279|13141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11034,"opsSec":22065.99093565729},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10685,"opsSec":21367.81971314775},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10514,"opsSec":21027.009796054685},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9787,"opsSec":19573.09321773741},{"name":"Reusing Intl.DateTimeFormat()","samples":208321,"opsSec":416613.6569396911},{"name":"Date.toLocaleDateString()","samples":534160,"opsSec":1068096.4751782536},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13141,"opsSec":26279.920627560266}]}-->
