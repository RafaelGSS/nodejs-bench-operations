## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,633|10817|
|Intl.DateTimeFormat().format(new Date())|21,112|10571|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,001|10501|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,939|9973|
|Reusing Intl.DateTimeFormat()|462,350|231177|
|Date.toLocaleDateString()|1,043,689|521848|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,469|13235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10817,"opsSec":21633.667274197323},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10571,"opsSec":21112.316167917175},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10501,"opsSec":21001.719543037223},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9973,"opsSec":19939.23222579792},{"name":"Reusing Intl.DateTimeFormat()","samples":231177,"opsSec":462350.9614294815},{"name":"Date.toLocaleDateString()","samples":521848,"opsSec":1043689.9006762205},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13235,"opsSec":26469.036738815004}]}-->
