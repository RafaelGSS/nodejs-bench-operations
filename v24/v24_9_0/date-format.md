## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,109|11055|
|Intl.DateTimeFormat().format(new Date())|20,827|10414|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,044|10523|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,934|9968|
|Reusing Intl.DateTimeFormat()|444,691|222348|
|Date.toLocaleDateString()|1,048,253|524132|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,403|13203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11055,"opsSec":22109.238380956253},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10414,"opsSec":20827.057617296934},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10523,"opsSec":21044.680624792913},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9968,"opsSec":19934.386112100365},{"name":"Reusing Intl.DateTimeFormat()","samples":222348,"opsSec":444691.9559713524},{"name":"Date.toLocaleDateString()","samples":524132,"opsSec":1048253.1484834068},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13203,"opsSec":26403.834146292647}]}-->
