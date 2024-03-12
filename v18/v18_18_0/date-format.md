## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,496|81|
|Intl.DateTimeFormat().format(new Date())|12,442|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,604|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,321|93|
|Reusing Intl.DateTimeFormat()|585,262|96|
|Date.toLocaleDateString()|724,337|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,640|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14495.872000579862,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12442.235134704933,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14603.558266738159,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18320.920410554576,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":585261.5938734672,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":724337.4818229942,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16639.6398336633,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
