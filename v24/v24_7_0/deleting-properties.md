## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,194,625|2097314|
|Using delete property (proto: null)|18,024,608|9013419|
|Using delete property (cached proto: null)|4,337,565|2169250|
|Using undefined assignment|78,194,190|39106480|
|Using undefined assignment (proto: null)|19,998,878|10000720|
|Using undefined property (cached proto: null)|76,911,321|38469741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2097314,"opsSec":4194625.567117171},{"name":"Using delete property (proto: null)","samples":9013419,"opsSec":18024608.17572258},{"name":"Using delete property (cached proto: null)","samples":2169250,"opsSec":4337565.688350729},{"name":"Using undefined assignment","samples":39106480,"opsSec":78194190.2665684},{"name":"Using undefined assignment (proto: null)","samples":10000720,"opsSec":19998878.06372452},{"name":"Using undefined property (cached proto: null)","samples":38469741,"opsSec":76911321.84244326}]}-->
