## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,073,882|93|
|Using delete property (proto: null)|23,644,767|97|
|Using delete property (cached proto: null)|4,123,331|91|
|Using undefined assignment|934,911,914|98|
|Using undefined assignment (proto: null)|25,670,432|98|
|Using undefined property (cached proto: null)|933,212,503|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4073881.8027648176,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23644767.24867159,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4123330.737954204,"samples":6},{"name":"Using undefined assignment","opsSec":934911914.4467353,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25670432.096110832,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":933212503.0331613,"samples":7}]}-->
