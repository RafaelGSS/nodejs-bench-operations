## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,005,416|2007469|
|Using delete property (proto: null)|15,478,922|7740151|
|Using delete property (cached proto: null)|4,079,955|2040087|
|Using undefined assignment|73,291,015|36645518|
|Using undefined assignment (proto: null)|18,299,114|9149727|
|Using undefined property (cached proto: null)|73,379,975|36696369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":4005416.196444494,"samples":2007469},{"name":"Using delete property (proto: null)","opsSec":15478922.270784473,"samples":7740151},{"name":"Using delete property (cached proto: null)","opsSec":4079955.1267272714,"samples":2040087},{"name":"Using undefined assignment","opsSec":73291015.62509766,"samples":36645518},{"name":"Using undefined assignment (proto: null)","opsSec":18299114.844205476,"samples":9149727},{"name":"Using undefined property (cached proto: null)","opsSec":73379975.90135118,"samples":36696369}]}-->
