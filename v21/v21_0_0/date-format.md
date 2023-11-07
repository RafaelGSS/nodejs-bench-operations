## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,140|85|
|Intl.DateTimeFormat().format(new Date())|19,588|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,072|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,659|88|
|Reusing Intl.DateTimeFormat()|728,463|101|
|Date.toLocaleDateString()|734,691|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,223|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20140.308402745,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19588.47259991827,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19072.478221906327,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19658.548652699337,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":728463.0683632717,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":734690.8970846384,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21223.33526473269,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
