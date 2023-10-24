## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,245|79|
|Intl.DateTimeFormat().format(new Date())|5,650|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,259|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,466|85|
|Reusing Intl.DateTimeFormat()|321,814|70|
|Date.toLocaleDateString()|411,805|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,427|76|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5244.723010011627,"samples":2},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5650.031979939175,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6258.824465414754,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6466.196750528312,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":321813.9888941722,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":411804.72938273515,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6427.15551913333,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
