## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,100|11551|
|Intl.DateTimeFormat().format(new Date())|22,500|11251|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,045|11023|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,015|7508|
|Reusing Intl.DateTimeFormat()|648,340|324171|
|Date.toLocaleDateString()|638,668|319335|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,098|11550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23100.851980058444,"samples":11551},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22500.55010954964,"samples":11251},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22045.263247300598,"samples":11023},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15015.20956933798,"samples":7508},{"name":"Reusing Intl.DateTimeFormat()","opsSec":648340.4984439657,"samples":324171},{"name":"Date.toLocaleDateString()","opsSec":638668.5412811341,"samples":319335},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23098.892916255856,"samples":11550}]}-->
