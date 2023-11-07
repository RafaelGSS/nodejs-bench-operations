## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,442|81|
|Intl.DateTimeFormat().format(new Date())|19,819|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,139|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,562|82|
|Reusing Intl.DateTimeFormat()|728,437|96|
|Date.toLocaleDateString()|744,237|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,566|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18442.452141842266,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19819.386821008884,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17138.836341671347,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21562.392970844034,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":728436.5817279036,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":744236.8535372374,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19566.290397873505,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
