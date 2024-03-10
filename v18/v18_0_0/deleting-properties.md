## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,484,477|93|
|Using delete property (proto: null)|21,341,795|99|
|Using delete property (cached proto: null)|3,536,818|96|
|Using undefined assignment|821,754,518|96|
|Using undefined assignment (proto: null)|23,575,129|96|
|Using undefined property (cached proto: null)|818,739,068|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3484477.3862336073,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21341795.04529854,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3536817.5535685522,"samples":5},{"name":"Using undefined assignment","opsSec":821754517.7006813,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23575129.33966795,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":818739067.962272,"samples":6}]}-->
