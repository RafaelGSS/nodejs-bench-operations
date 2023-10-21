## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,426,684|95|
|Using delete property (proto: null)|12,673,974|93|
|Using delete property (cached proto: null)|2,429,939|97|
|Using undefined assignment|709,300,362|95|
|Using undefined assignment (proto: null)|14,576,088|95|
|Using undefined property (cached proto: null)|708,003,683|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2426684.4273038493,"samples":6},{"name":"Using delete property (proto: null)","opsSec":12673973.655338705,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2429939.2020113706,"samples":6},{"name":"Using undefined assignment","opsSec":709300362.0157505,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14576088.473956298,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":708003682.8568424,"samples":8}]}-->
