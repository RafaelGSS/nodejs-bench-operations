## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|826,840,828|98|
|Using dot notation|826,246,106|95|
|Using define property (writable)|4,433,330|90|
|Using define property initialized (writable)|6,146,343|94|
|Using define property (getter)|2,397,219|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":826840828.4585024,"samples":7},{"name":"Using dot notation","opsSec":826246106.1196157,"samples":8},{"name":"Using define property (writable)","opsSec":4433329.7980143875,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6146343.483490669,"samples":5},{"name":"Using define property (getter)","opsSec":2397219.3972986885,"samples":4}]}-->
