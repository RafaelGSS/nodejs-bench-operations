## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,369|6186|
|Intl.DateTimeFormat().format(new Date())|11,524|5763|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,724|6363|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,667|6334|
|Reusing Intl.DateTimeFormat()|640,655|320833|
|Date.toLocaleDateString()|667,233|333623|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,419|6213|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6186,"opsSec":12369.922422049529},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5763,"opsSec":11524.652099739718},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6363,"opsSec":12724.040701316648},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6334,"opsSec":12667.450232659903},{"name":"Reusing Intl.DateTimeFormat()","samples":320833,"opsSec":640655.6437665077},{"name":"Date.toLocaleDateString()","samples":333623,"opsSec":667233.0369965571},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6213,"opsSec":12419.578829353648}]}-->
