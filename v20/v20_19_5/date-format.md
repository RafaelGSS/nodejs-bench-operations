## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,588|9803|
|Intl.DateTimeFormat().format(new Date())|19,261|9632|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,604|9803|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,584|9293|
|Reusing Intl.DateTimeFormat()|435,944|217991|
|Date.toLocaleDateString()|991,035|495578|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,579|11291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9803,"opsSec":19588.264276229427},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9632,"opsSec":19261.485836776697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9803,"opsSec":19604.879267471795},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9293,"opsSec":18584.178750482453},{"name":"Reusing Intl.DateTimeFormat()","samples":217991,"opsSec":435944.53143941186},{"name":"Date.toLocaleDateString()","samples":495578,"opsSec":991035.0263364052},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11291,"opsSec":22579.791244820433}]}-->
