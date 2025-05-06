## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,077|9039|
|Intl.DateTimeFormat().format(new Date())|17,752|8877|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,672|9337|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,397|9109|
|Reusing Intl.DateTimeFormat()|375,755|209027|
|Date.toLocaleDateString()|743,829|371923|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,238|10620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9039,"opsSec":18077.012055137162},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8877,"opsSec":17752.209192641065},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9337,"opsSec":18672.34768395345},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9109,"opsSec":17397.858446053957},{"name":"Reusing Intl.DateTimeFormat()","samples":209027,"opsSec":375755.0287105104},{"name":"Date.toLocaleDateString()","samples":371923,"opsSec":743829.6059954839},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10620,"opsSec":21238.48357227294}]}-->
