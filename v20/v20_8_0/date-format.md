## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,345|76|
|Intl.DateTimeFormat().format(new Date())|8,001|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,829|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,123|75|
|Reusing Intl.DateTimeFormat()|440,809|87|
|Date.toLocaleDateString()|517,085|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,828|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7345.017420281236,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8001.1413907964115,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8828.882160055502,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8123.344667727571,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":440809.1820752137,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":517085.4084707734,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8827.749809795334,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
