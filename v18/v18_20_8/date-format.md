## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,268|9135|
|Intl.DateTimeFormat().format(new Date())|17,778|8890|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,667|9334|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,454|9138|
|Reusing Intl.DateTimeFormat()|368,789|202869|
|Date.toLocaleDateString()|710,666|355334|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,028|10515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9135,"opsSec":18268.467933205247},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8890,"opsSec":17778.587526778174},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9334,"opsSec":18667.319949534238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9138,"opsSec":17454.720724821775},{"name":"Reusing Intl.DateTimeFormat()","samples":202869,"opsSec":368789.92637142906},{"name":"Date.toLocaleDateString()","samples":355334,"opsSec":710666.7961304473},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10515,"opsSec":21028.237749563636}]}-->
