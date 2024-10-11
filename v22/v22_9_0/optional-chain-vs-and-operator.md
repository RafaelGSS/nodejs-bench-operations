## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|145,835,956|72918530|
|Using optional chain (obj.field?.field2) (undefined)|99,021,733|49510872|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,400,632|49200342|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,924,022|49462695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:21:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":145835956.02181292,"samples":72918530},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":99021733.89978315,"samples":49510872},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98400632.4380686,"samples":49200342},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98924022.27646801,"samples":49462695}]}-->
