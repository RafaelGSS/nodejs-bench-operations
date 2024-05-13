## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,940,904|7470453|
|using Array.includes (first item)|15,232,364|7616183|
|Using raw comparison|16,191,561|8095781|
|Using raw comparison (first item)|16,071,652|8035827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:58:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14940904.954132136,"samples":7470453},{"name":"using Array.includes (first item)","opsSec":15232364.690021653,"samples":7616183},{"name":"Using raw comparison","opsSec":16191561.287592798,"samples":8095781},{"name":"Using raw comparison (first item)","opsSec":16071652.617877457,"samples":8035827}]}-->
