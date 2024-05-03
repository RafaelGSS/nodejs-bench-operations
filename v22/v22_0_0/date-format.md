## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,927|80|
|Intl.DateTimeFormat().format(new Date())|18,323|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,281|93|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,090|82|
|Reusing Intl.DateTimeFormat()|745,214|85|
|Date.toLocaleDateString()|859,271|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,230|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17926.99064553262,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18322.525788516643,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21280.679795768985,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18090.200801510717,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":745213.7882293559,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":859270.7470101938,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21230.133204371174,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
