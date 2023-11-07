## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,396,695|99|
|Using dot notation|847,639,100|100|
|Using define property (writable)|4,764,877|98|
|Using define property initialized (writable)|5,976,802|98|
|Using define property (getter)|2,346,974|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:51:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848396694.7441775,"samples":6},{"name":"Using dot notation","opsSec":847639100.1376154,"samples":7},{"name":"Using define property (writable)","opsSec":4764877.284685347,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5976802.162373027,"samples":5},{"name":"Using define property (getter)","opsSec":2346973.9777646894,"samples":5}]}-->
