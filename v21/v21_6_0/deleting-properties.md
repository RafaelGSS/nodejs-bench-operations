## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,836,680|95|
|Using delete property (proto: null)|21,097,195|93|
|Using delete property (cached proto: null)|3,942,150|97|
|Using undefined assignment|812,119,262|96|
|Using undefined assignment (proto: null)|23,081,452|98|
|Using undefined property (cached proto: null)|785,710,602|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3836679.8041025833,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21097194.886954863,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3942150.0063574417,"samples":4},{"name":"Using undefined assignment","opsSec":812119262.163338,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23081452.125398125,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":785710602.4352272,"samples":6}]}-->
