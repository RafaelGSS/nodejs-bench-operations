## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,277|9139|
|Intl.DateTimeFormat().format(new Date())|17,296|8653|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,373|9187|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,182|8897|
|Reusing Intl.DateTimeFormat()|361,172|180593|
|Date.toLocaleDateString()|712,745|356374|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,483|10742|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9139,"opsSec":18277.37633936455},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8653,"opsSec":17296.91610937917},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9187,"opsSec":18373.45530054416},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8897,"opsSec":17182.252166107068},{"name":"Reusing Intl.DateTimeFormat()","samples":180593,"opsSec":361172.9349302518},{"name":"Date.toLocaleDateString()","samples":356374,"opsSec":712745.6008983073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10742,"opsSec":21483.260760997215}]}-->
