## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,682,338|95|
|Using dot notation|821,016,568|93|
|Using define property (writable)|4,437,716|95|
|Using define property initialized (writable)|6,211,155|89|
|Using define property (getter)|2,456,443|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:20:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":820682338.4857408,"samples":6},{"name":"Using dot notation","opsSec":821016567.8338205,"samples":6},{"name":"Using define property (writable)","opsSec":4437716.2085599825,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6211155.103549735,"samples":4},{"name":"Using define property (getter)","opsSec":2456443.4383145166,"samples":4}]}-->
