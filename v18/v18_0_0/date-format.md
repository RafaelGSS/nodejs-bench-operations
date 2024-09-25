## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,445|7723|
|Intl.DateTimeFormat().format(new Date())|13,634|6818|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,983|7992|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,812|7907|
|Reusing Intl.DateTimeFormat()|610,651|305326|
|Date.toLocaleDateString()|623,632|311817|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,060|8031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15445.939915346888,"samples":7723},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13634.421052561549,"samples":6818},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15983.232741081854,"samples":7992},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15812.942081628555,"samples":7907},{"name":"Reusing Intl.DateTimeFormat()","opsSec":610651.1217271446,"samples":305326},{"name":"Date.toLocaleDateString()","opsSec":623632.5596321719,"samples":311817},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16060.727604142447,"samples":8031}]}-->
