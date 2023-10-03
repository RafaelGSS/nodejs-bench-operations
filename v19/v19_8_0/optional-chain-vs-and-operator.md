## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|699,577,693|92|
|Using optional chain (obj.field?.field2) (undefined)|715,940,479|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|714,936,908|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,318,735|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>

