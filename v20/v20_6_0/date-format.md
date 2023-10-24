## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,101|83|
|Intl.DateTimeFormat().format(new Date())|9,035|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,765|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,334|68|
|Reusing Intl.DateTimeFormat()|493,281|93|
|Date.toLocaleDateString()|451,288|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,942|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10100.981864165306,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9035.408935494204,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12764.753872187754,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9333.957780847912,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":493280.9311215761,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":451288.3726430387,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11942.12180797785,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
