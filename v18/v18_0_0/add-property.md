## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,901,750|98|
|Using dot notation|819,508,212|93|
|Using define property (writable)|4,534,659|92|
|Using define property initialized (writable)|5,782,906|95|
|Using define property (getter)|2,386,628|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:20:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":820901750.0104984,"samples":6},{"name":"Using dot notation","opsSec":819508211.9192001,"samples":7},{"name":"Using define property (writable)","opsSec":4534659.154337075,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5782905.972288615,"samples":4},{"name":"Using define property (getter)","opsSec":2386627.660330976,"samples":5}]}-->
