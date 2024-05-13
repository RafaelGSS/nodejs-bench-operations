## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,016,084|508043|
|Using brackets {}|1,052,606|526304|
|Using '' + |1,052,764|526383|
|Using date.toString()|1,173,488|586745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1016084.2751560118,"samples":508043},{"name":"Using brackets {}","opsSec":1052606.1192993503,"samples":526304},{"name":"Using '' + ","opsSec":1052764.885063739,"samples":526383},{"name":"Using date.toString()","opsSec":1173488.2530449266,"samples":586745}]}-->
