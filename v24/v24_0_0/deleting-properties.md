## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,147,411|2074119|
|Using delete property (proto: null)|17,956,874|8980513|
|Using delete property (cached proto: null)|4,235,012|2117689|
|Using undefined assignment|77,931,319|38966017|
|Using undefined assignment (proto: null)|19,442,158|9721148|
|Using undefined property (cached proto: null)|77,388,739|38694385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2074119,"opsSec":4147411.7609238126},{"name":"Using delete property (proto: null)","samples":8980513,"opsSec":17956874.442456402},{"name":"Using delete property (cached proto: null)","samples":2117689,"opsSec":4235012.221994386},{"name":"Using undefined assignment","samples":38966017,"opsSec":77931319.83738501},{"name":"Using undefined assignment (proto: null)","samples":9721148,"opsSec":19442158.271750804},{"name":"Using undefined property (cached proto: null)","samples":38694385,"opsSec":77388739.35405922}]}-->
