## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,071,058|99|
|Using optional chain (obj.field?.field2) (undefined)|822,171,759|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,961,216|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,928,223|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822071058.0241916,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822171759.4196566,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822961216.126323,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821928223.4930742,"samples":6}]}-->
