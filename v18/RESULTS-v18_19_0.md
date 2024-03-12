## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,505,367|97|
|Using dot notation|787,157,794|94|
|Using define property (writable)|4,260,711|95|
|Using define property initialized (writable)|5,897,360|90|
|Using define property (getter)|2,286,029|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":819505367.0324596,"samples":6},{"name":"Using dot notation","opsSec":787157793.5177962,"samples":8},{"name":"Using define property (writable)","opsSec":4260711.370325327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5897360.34853542,"samples":5},{"name":"Using define property (getter)","opsSec":2286029.163858436,"samples":3}]}-->
