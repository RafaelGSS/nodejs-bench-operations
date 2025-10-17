## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,690|10849|
|Intl.DateTimeFormat().format(new Date())|20,624|10313|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,211|10606|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,996|10499|
|Reusing Intl.DateTimeFormat()|384,230|212252|
|Date.toLocaleDateString()|951,304|475717|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,585|13293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:07:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10849,"opsSec":21690.06139414962},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10313,"opsSec":20624.027765472845},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10606,"opsSec":21211.994697001326},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10499,"opsSec":20996.68980655607},{"name":"Reusing Intl.DateTimeFormat()","samples":212252,"opsSec":384230.8086045695},{"name":"Date.toLocaleDateString()","samples":475717,"opsSec":951304.1850309107},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13293,"opsSec":26585.50449936714}]}-->
