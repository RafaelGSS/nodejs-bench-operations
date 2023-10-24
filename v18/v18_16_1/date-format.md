## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,309|92|
|Intl.DateTimeFormat().format(new Date())|8,594|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,497|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,064|84|
|Reusing Intl.DateTimeFormat()|415,193|94|
|Date.toLocaleDateString()|419,405|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,971|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9309.455325189043,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8593.9908957384,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7497.32954162883,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10064.192113869136,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":415193.10966273485,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":419405.1001595184,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9970.968783618559,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
