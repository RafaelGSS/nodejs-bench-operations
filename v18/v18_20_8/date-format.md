## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,236|9145|
|Intl.DateTimeFormat().format(new Date())|17,634|8820|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,207|9104|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,223|8825|
|Reusing Intl.DateTimeFormat()|352,442|176223|
|Date.toLocaleDateString()|688,039|344020|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,451|10726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9145,"opsSec":18236.05566842246},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8820,"opsSec":17634.265407426567},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9104,"opsSec":18207.36277871747},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8825,"opsSec":17223.87294367572},{"name":"Reusing Intl.DateTimeFormat()","samples":176223,"opsSec":352442.7180534095},{"name":"Date.toLocaleDateString()","samples":344020,"opsSec":688039.6821256669},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10726,"opsSec":21451.110508251662}]}-->
