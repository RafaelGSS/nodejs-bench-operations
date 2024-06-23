## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,248,632|7124317|
|Using Object.getOwnPropertyNames()|13,914,248|6957125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:44:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14248632.241197813,"samples":7124317},{"name":"Using Object.getOwnPropertyNames()","opsSec":13914248.996663239,"samples":6957125}]}-->
