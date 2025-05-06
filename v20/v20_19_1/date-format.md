## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,398|9209|
|Intl.DateTimeFormat().format(new Date())|18,013|9007|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,671|9336|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,649|8825|
|Reusing Intl.DateTimeFormat()|484,729|242367|
|Date.toLocaleDateString()|985,578|492790|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,033|10946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9209,"opsSec":18398.649698544446},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9007,"opsSec":18013.372774359996},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9336,"opsSec":18671.94088463516},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8825,"opsSec":17649.407227008873},{"name":"Reusing Intl.DateTimeFormat()","samples":242367,"opsSec":484729.82162893756},{"name":"Date.toLocaleDateString()","samples":492790,"opsSec":985578.9651420865},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10946,"opsSec":21033.558997262335}]}-->
