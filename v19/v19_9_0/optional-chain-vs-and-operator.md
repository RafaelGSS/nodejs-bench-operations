## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|695,483,637|88|
|Using optional chain (obj.field?.field2) (undefined)|705,510,138|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|729,671,313|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|704,940,779|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:48 GMT+0000 (Coordinated Universal Time)
</details>

