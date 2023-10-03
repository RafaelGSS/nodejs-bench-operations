## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,148,848|87|
|Using optional chain (obj.field?.field2) (undefined)|838,871,807|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|861,125,532|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|851,140,614|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:46 GMT+0000 (Coordinated Universal Time)
</details>

