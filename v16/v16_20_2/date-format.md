## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,361|79|
|Intl.DateTimeFormat().format(new Date())|11,636|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,105|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,992|83|
|Reusing Intl.DateTimeFormat()|599,252|98|
|Date.toLocaleDateString()|601,013|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,546|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:07:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12361.40169490671,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11636.359602406043,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13104.911237108015,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11991.868727164912,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":599251.7616022712,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":601012.5651468339,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13546.369502652256,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
