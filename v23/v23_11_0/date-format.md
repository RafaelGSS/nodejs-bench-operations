## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,745|10376|
|Intl.DateTimeFormat().format(new Date())|20,073|10037|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,493|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,816|9409|
|Reusing Intl.DateTimeFormat()|496,743|248375|
|Date.toLocaleDateString()|1,025,686|512845|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,602|12302|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10376,"opsSec":20745.689742059774},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10037,"opsSec":20073.676492629642},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9748,"opsSec":19493.820473908094},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9409,"opsSec":18816.88001930125},{"name":"Reusing Intl.DateTimeFormat()","samples":248375,"opsSec":496743.05751902814},{"name":"Date.toLocaleDateString()","samples":512845,"opsSec":1025686.9865316337},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12302,"opsSec":24602.339145288977}]}-->
