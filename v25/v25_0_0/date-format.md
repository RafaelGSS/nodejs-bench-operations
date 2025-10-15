## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,554|10786|
|Intl.DateTimeFormat().format(new Date())|20,538|10270|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,739|10370|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,463|10232|
|Reusing Intl.DateTimeFormat()|430,428|253875|
|Date.toLocaleDateString()|945,729|472865|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,277|13139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10786,"opsSec":21554.166642927976},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10270,"opsSec":20538.35545280218},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10370,"opsSec":20739.604537220683},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10232,"opsSec":20463.854133647736},{"name":"Reusing Intl.DateTimeFormat()","samples":253875,"opsSec":430428.1636070751},{"name":"Date.toLocaleDateString()","samples":472865,"opsSec":945729.5630729418},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13139,"opsSec":26277.005730657165}]}-->
