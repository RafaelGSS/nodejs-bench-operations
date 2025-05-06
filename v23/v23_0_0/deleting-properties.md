## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,966,574|1983298|
|Using delete property (proto: null)|17,760,419|8880799|
|Using delete property (cached proto: null)|3,985,462|1992733|
|Using undefined assignment|72,254,286|36127188|
|Using undefined assignment (proto: null)|19,117,459|9560221|
|Using undefined property (cached proto: null)|73,056,128|36528078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:44:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1983298,"opsSec":3966574.9771526214},{"name":"Using delete property (proto: null)","samples":8880799,"opsSec":17760419.986863114},{"name":"Using delete property (cached proto: null)","samples":1992733,"opsSec":3985462.5007639243},{"name":"Using undefined assignment","samples":36127188,"opsSec":72254286.54919325},{"name":"Using undefined assignment (proto: null)","samples":9560221,"opsSec":19117459.255771995},{"name":"Using undefined property (cached proto: null)","samples":36528078,"opsSec":73056128.67700787}]}-->
