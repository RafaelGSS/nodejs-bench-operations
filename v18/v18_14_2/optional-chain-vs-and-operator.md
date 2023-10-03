## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,352,661|97|
|Using optional chain (obj.field?.field2) (undefined)|589,703,321|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,772,754|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,125,468|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>

