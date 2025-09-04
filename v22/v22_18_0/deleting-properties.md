## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,942,784|1971393|
|Using delete property (proto: null)|17,604,102|8802053|
|Using delete property (cached proto: null)|4,056,984|2028494|
|Using undefined assignment|78,915,935|39458446|
|Using undefined assignment (proto: null)|18,709,132|9354569|
|Using undefined property (cached proto: null)|78,323,238|39168206|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1971393,"opsSec":3942784.706766616},{"name":"Using delete property (proto: null)","samples":8802053,"opsSec":17604102.197513923},{"name":"Using delete property (cached proto: null)","samples":2028494,"opsSec":4056984.4055118165},{"name":"Using undefined assignment","samples":39458446,"opsSec":78915935.85452119},{"name":"Using undefined assignment (proto: null)","samples":9354569,"opsSec":18709132.761442825},{"name":"Using undefined property (cached proto: null)","samples":39168206,"opsSec":78323238.34460339}]}-->
