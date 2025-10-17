## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,323|9666|
|Intl.DateTimeFormat().format(new Date())|19,143|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,221|9611|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,263|9134|
|Reusing Intl.DateTimeFormat()|537,850|268928|
|Date.toLocaleDateString()|937,813|468907|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,179|11590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9666,"opsSec":19323.768345217693},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9572,"opsSec":19143.366852284726},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9611,"opsSec":19221.023226041696},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9134,"opsSec":18263.500969171255},{"name":"Reusing Intl.DateTimeFormat()","samples":268928,"opsSec":537850.2611377137},{"name":"Date.toLocaleDateString()","samples":468907,"opsSec":937813.2853862765},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11590,"opsSec":23179.43632246751}]}-->
