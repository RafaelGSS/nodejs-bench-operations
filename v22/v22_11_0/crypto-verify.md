## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,641|3321|
|crypto.verify('RSA-SHA256')|6,809|3405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6641.83000900275,"samples":3321},{"name":"crypto.verify('RSA-SHA256')","opsSec":6809.023654098239,"samples":3405}]}-->
