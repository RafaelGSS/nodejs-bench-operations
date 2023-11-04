## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,809,137|99|
|Using dot notation|824,461,652|94|
|Using define property (writable)|4,248,464|94|
|Using define property initialized (writable)|6,184,803|94|
|Using define property (getter)|2,402,528|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:01:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Directly in the object","opsSec":822809136.5087881,"samples":6},{"name":"Using dot notation","opsSec":824461652.3780397,"samples":7},{"name":"Using define property (writable)","opsSec":4248464.368032984,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6184802.784895606,"samples":5},{"name":"Using define property (getter)","opsSec":2402528.1955595966,"samples":4}]}-->
