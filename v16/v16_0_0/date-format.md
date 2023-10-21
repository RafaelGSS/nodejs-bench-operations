## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,049|75|
|Intl.DateTimeFormat().format(new Date())|6,045|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,562|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,610|70|
|Reusing Intl.DateTimeFormat()|304,954|72|
|Date.toLocaleDateString()|406,827|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,811|77|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6049.3935243269825,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6044.990611375096,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7561.5125970218505,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6610.477128092489,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":304954.3020043641,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":406827.25195912964,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":7811.297023598282,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
