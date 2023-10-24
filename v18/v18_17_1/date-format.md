## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,908|84|
|Intl.DateTimeFormat().format(new Date())|9,827|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,973|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,543|70|
|Reusing Intl.DateTimeFormat()|535,924|99|
|Date.toLocaleDateString()|553,640|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,756|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11907.631318002828,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9827.142329688615,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14973.129511803994,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10543.337055403754,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":535923.6140649917,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":553639.6248201143,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12755.51735009754,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
