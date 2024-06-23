## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,487|7744|
|Intl.DateTimeFormat().format(new Date())|15,195|7598|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,613|7807|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,812|10407|
|Reusing Intl.DateTimeFormat()|741,975|370988|
|Date.toLocaleDateString()|753,500|376751|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,610|10306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15487.638735061731,"samples":7744},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15195.193530603765,"samples":7598},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15613.789556781654,"samples":7807},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20812.34346221312,"samples":10407},{"name":"Reusing Intl.DateTimeFormat()","opsSec":741975.3661806404,"samples":370988},{"name":"Date.toLocaleDateString()","opsSec":753500.5307733028,"samples":376751},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20610.662862474393,"samples":10306}]}-->
