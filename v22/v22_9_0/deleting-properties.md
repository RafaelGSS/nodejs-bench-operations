## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,025,729|2012979|
|Using delete property (proto: null)|15,874,867|7946781|
|Using delete property (cached proto: null)|3,954,631|1977479|
|Using undefined assignment|69,901,466|34953365|
|Using undefined assignment (proto: null)|17,089,541|8546085|
|Using undefined property (cached proto: null)|70,112,166|35056230|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:11:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4025729.725021673,"samples":2012979},{"name":"Using delete property (proto: null)","opsSec":15874867.089770667,"samples":7946781},{"name":"Using delete property (cached proto: null)","opsSec":3954631.2209129534,"samples":1977479},{"name":"Using undefined assignment","opsSec":69901466.97874823,"samples":34953365},{"name":"Using undefined assignment (proto: null)","opsSec":17089541.457628403,"samples":8546085},{"name":"Using undefined property (cached proto: null)","opsSec":70112166.93114224,"samples":35056230}]}-->
