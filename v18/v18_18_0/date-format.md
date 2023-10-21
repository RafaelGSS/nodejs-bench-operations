## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,661|87|
|Intl.DateTimeFormat().format(new Date())|9,703|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,864|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,354|70|
|Reusing Intl.DateTimeFormat()|546,196|96|
|Date.toLocaleDateString()|553,969|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,671|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11661.335291905882,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9703.22555877545,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14864.22791608202,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10353.625737689166,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":546196.1527932353,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":553968.8922085025,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12671.02279783394,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
