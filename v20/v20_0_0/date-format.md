## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,908|85|
|Intl.DateTimeFormat().format(new Date())|8,248|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,270|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,518|84|
|Reusing Intl.DateTimeFormat()|663,982|96|
|Date.toLocaleDateString()|656,291|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,374|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10908.103749621934,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8247.627750084037,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12269.950918235769,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14517.759288750938,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":663981.7489089955,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":656290.8640153036,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13373.571293281304,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
