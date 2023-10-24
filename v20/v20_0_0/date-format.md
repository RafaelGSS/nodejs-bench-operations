## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,818|87|
|Intl.DateTimeFormat().format(new Date())|8,994|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,792|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,279|82|
|Reusing Intl.DateTimeFormat()|444,256|98|
|Date.toLocaleDateString()|411,527|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,122|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8817.658517367827,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8993.700033410349,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9792.17063099481,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10278.550204588128,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":444255.98094782187,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":411527.03408731776,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11122.233125637415,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
