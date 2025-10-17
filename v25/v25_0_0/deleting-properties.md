## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,162,435|2081332|
|Using delete property (proto: null)|16,584,934|8292472|
|Using delete property (cached proto: null)|4,194,598|2097360|
|Using undefined assignment|75,280,673|37640342|
|Using undefined assignment (proto: null)|18,958,053|9479029|
|Using undefined property (cached proto: null)|78,880,546|39446314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2081332,"opsSec":4162435.723700041},{"name":"Using delete property (proto: null)","samples":8292472,"opsSec":16584934.911455669},{"name":"Using delete property (cached proto: null)","samples":2097360,"opsSec":4194598.4573151},{"name":"Using undefined assignment","samples":37640342,"opsSec":75280673.61126703},{"name":"Using undefined assignment (proto: null)","samples":9479029,"opsSec":18958053.184654493},{"name":"Using undefined property (cached proto: null)","samples":39446314,"opsSec":78880546.81321117}]}-->
