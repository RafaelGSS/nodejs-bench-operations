## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,394|83|
|Intl.DateTimeFormat().format(new Date())|8,313|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,800|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,530|77|
|Reusing Intl.DateTimeFormat()|415,563|92|
|Date.toLocaleDateString()|487,614|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,505|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8394.107159969693,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8313.145912274242,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8799.612380016508,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8529.568989470896,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":415563.07497700717,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":487614.01498355775,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9505.354613297675,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
