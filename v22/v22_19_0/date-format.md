## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,749|10377|
|Intl.DateTimeFormat().format(new Date())|19,958|9980|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,907|9955|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,876|9440|
|Reusing Intl.DateTimeFormat()|437,527|219356|
|Date.toLocaleDateString()|995,958|498002|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,578|12291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10377,"opsSec":20749.83621336641},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9980,"opsSec":19958.415661047995},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9955,"opsSec":19907.238189217056},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9440,"opsSec":18876.385964895933},{"name":"Reusing Intl.DateTimeFormat()","samples":219356,"opsSec":437527.9513573659},{"name":"Date.toLocaleDateString()","samples":498002,"opsSec":995958.8352587387},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12291,"opsSec":24578.64589966595}]}-->
