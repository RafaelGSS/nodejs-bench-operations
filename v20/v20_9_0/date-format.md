## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,258|82|
|Intl.DateTimeFormat().format(new Date())|8,689|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,555|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,683|75|
|Reusing Intl.DateTimeFormat()|476,171|85|
|Date.toLocaleDateString()|425,810|82|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,234|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11258.24232843451,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8689.198315340298,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12554.626284278282,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11682.752169110976,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":476170.8781825927,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":425810.38468300225,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12233.881524547909,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
