## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,842,091|93|
|Using delete property (proto: null)|21,101,850|95|
|Using delete property (cached proto: null)|3,906,276|97|
|Using undefined assignment|844,280,539|96|
|Using undefined assignment (proto: null)|23,177,116|94|
|Using undefined property (cached proto: null)|843,097,957|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using delete property","opsSec":3842090.859419882,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21101850.46267297,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3906276.114524292,"samples":4},{"name":"Using undefined assignment","opsSec":844280538.6170456,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23177116.440780498,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843097956.6992537,"samples":9}]}-->
