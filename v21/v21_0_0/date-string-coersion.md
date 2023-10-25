## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|713,803|98|
|Using brackets {}|717,630|91|
|Using '' + |727,323|98|
|Using date.toString()|779,081|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":713802.9677131473,"samples":6},{"name":"Using brackets {}","opsSec":717629.5794602821,"samples":4},{"name":"Using '' + ","opsSec":727322.7184107555,"samples":6},{"name":"Using date.toString()","opsSec":779081.094214379,"samples":4}]}-->
