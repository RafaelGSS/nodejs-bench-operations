## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,858|8952|
|Intl.DateTimeFormat().format(new Date())|17,541|8771|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,024|9013|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,617|8810|
|Reusing Intl.DateTimeFormat()|372,190|225155|
|Date.toLocaleDateString()|697,749|348875|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,561|10281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":8952,"opsSec":17858.200501829},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8771,"opsSec":17541.910852009052},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9013,"opsSec":18024.701320269876},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8810,"opsSec":17617.877221973526},{"name":"Reusing Intl.DateTimeFormat()","samples":225155,"opsSec":372190.70343811525},{"name":"Date.toLocaleDateString()","samples":348875,"opsSec":697749.1110676326},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10281,"opsSec":20561.634085159818}]}-->
