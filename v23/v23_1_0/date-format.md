## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,100|10051|
|Intl.DateTimeFormat().format(new Date())|19,587|9794|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,243|9622|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,923|9462|
|Reusing Intl.DateTimeFormat()|575,482|287757|
|Date.toLocaleDateString()|1,166,263|583172|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,668|12335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20100.318367164768,"samples":10051},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19587.361177802548,"samples":9794},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19243.167540572194,"samples":9622},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18923.07216392566,"samples":9462},{"name":"Reusing Intl.DateTimeFormat()","opsSec":575482.3772433705,"samples":287757},{"name":"Date.toLocaleDateString()","opsSec":1166263.6887498654,"samples":583172},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24668.0422948274,"samples":12335}]}-->
