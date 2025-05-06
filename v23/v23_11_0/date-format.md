## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,551|9798|
|Intl.DateTimeFormat().format(new Date())|20,224|10113|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,392|10197|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,165|9587|
|Reusing Intl.DateTimeFormat()|511,306|256356|
|Date.toLocaleDateString()|1,020,191|510097|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,570|12286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9798,"opsSec":19551.106553620513},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10113,"opsSec":20224.98413949664},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10197,"opsSec":20392.5564517139},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9587,"opsSec":19165.092639893755},{"name":"Reusing Intl.DateTimeFormat()","samples":256356,"opsSec":511306.9224414478},{"name":"Date.toLocaleDateString()","samples":510097,"opsSec":1020191.2760892928},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12286,"opsSec":24570.856718036906}]}-->
