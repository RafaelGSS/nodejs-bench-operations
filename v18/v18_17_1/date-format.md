## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,030|87|
|Intl.DateTimeFormat().format(new Date())|16,958|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,540|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,813|78|
|Reusing Intl.DateTimeFormat()|689,258|99|
|Date.toLocaleDateString()|708,900|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,320|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18030.313691915086,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16957.79621994293,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17540.327144492545,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17812.877530158865,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":689258.159832502,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":708899.7203070669,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19320.23080322655,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
