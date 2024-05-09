## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,171,017|7085509|
|Using Object.getOwnPropertyNames()|13,852,090|6926046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14171017.729709286,"samples":7085509},{"name":"Using Object.getOwnPropertyNames()","opsSec":13852090.474200774,"samples":6926046}]}-->
