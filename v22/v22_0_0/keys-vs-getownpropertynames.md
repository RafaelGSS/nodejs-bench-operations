## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,108,390|7054196|
|Using Object.getOwnPropertyNames()|14,053,796|7026899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:51:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14108390.335209623,"samples":7054196},{"name":"Using Object.getOwnPropertyNames()","opsSec":14053796.08868582,"samples":7026899}]}-->
