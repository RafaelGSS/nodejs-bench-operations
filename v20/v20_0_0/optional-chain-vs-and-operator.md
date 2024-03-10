## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|826,546,925|100|
|Using optional chain (obj.field?.field2) (undefined)|827,072,262|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|826,681,178|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|826,401,378|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":826546924.5372735,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":827072262.060481,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":826681178.2748749,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":826401377.9236037,"samples":7}]}-->
