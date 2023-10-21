## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,578|82|
|Intl.DateTimeFormat().format(new Date())|8,670|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,610|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,105|89|
|Reusing Intl.DateTimeFormat()|350,867|71|
|Date.toLocaleDateString()|472,810|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,467|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7577.661343092724,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8670.481079111592,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7609.733983447598,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10105.334025861675,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":350867.4558907267,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":472809.59584034036,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9466.961442496464,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
