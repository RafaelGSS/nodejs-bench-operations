## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,044|9524|
|Intl.DateTimeFormat().format(new Date())|19,177|9589|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,957|9979|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,865|9439|
|Reusing Intl.DateTimeFormat()|418,793|209451|
|Date.toLocaleDateString()|945,102|472552|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,851|11427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9524,"opsSec":19044.57414773486},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9589,"opsSec":19177.70569892834},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9979,"opsSec":19957.39688746606},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9439,"opsSec":18865.883424102638},{"name":"Reusing Intl.DateTimeFormat()","samples":209451,"opsSec":418793.8414649156},{"name":"Date.toLocaleDateString()","samples":472552,"opsSec":945102.7467937578},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11427,"opsSec":22851.738729045806}]}-->
