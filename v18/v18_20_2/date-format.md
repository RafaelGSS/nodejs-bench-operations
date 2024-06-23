## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,497|8250|
|Intl.DateTimeFormat().format(new Date())|15,333|7667|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,890|7768|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,179|10590|
|Reusing Intl.DateTimeFormat()|721,739|360870|
|Date.toLocaleDateString()|722,968|361485|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,989|10495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16497.848812404158,"samples":8250},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15333.15636956742,"samples":7667},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11890.994372922369,"samples":7768},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21179.969373639575,"samples":10590},{"name":"Reusing Intl.DateTimeFormat()","opsSec":721739.7777528687,"samples":360870},{"name":"Date.toLocaleDateString()","opsSec":722968.6380729239,"samples":361485},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20989.97573489503,"samples":10495}]}-->
