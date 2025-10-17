## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,186,431|2093217|
|Using delete property (proto: null)|18,274,040|9137545|
|Using delete property (cached proto: null)|4,210,515|2105260|
|Using undefined assignment|74,957,533|37478769|
|Using undefined assignment (proto: null)|19,957,798|9979522|
|Using undefined property (cached proto: null)|76,059,951|38050710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2093217,"opsSec":4186431.2202096693},{"name":"Using delete property (proto: null)","samples":9137545,"opsSec":18274040.30257694},{"name":"Using delete property (cached proto: null)","samples":2105260,"opsSec":4210515.149486547},{"name":"Using undefined assignment","samples":37478769,"opsSec":74957533.8023781},{"name":"Using undefined assignment (proto: null)","samples":9979522,"opsSec":19957798.274147324},{"name":"Using undefined property (cached proto: null)","samples":38050710,"opsSec":76059951.20188531}]}-->
