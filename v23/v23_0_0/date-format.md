## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,550|10276|
|Intl.DateTimeFormat().format(new Date())|19,739|9870|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,691|9847|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,684|9343|
|Reusing Intl.DateTimeFormat()|535,177|268266|
|Date.toLocaleDateString()|1,111,948|556292|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,697|12349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10276,"opsSec":20550.473593023402},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9870,"opsSec":19739.7662022091},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9847,"opsSec":19691.259488651925},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9343,"opsSec":18684.73982640715},{"name":"Reusing Intl.DateTimeFormat()","samples":268266,"opsSec":535177.1732972935},{"name":"Date.toLocaleDateString()","samples":556292,"opsSec":1111948.7570185005},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12349,"opsSec":24697.548726389672}]}-->
