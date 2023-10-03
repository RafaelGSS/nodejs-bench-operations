## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,481,952|93|
|Using optional chain (obj.field?.field2) (undefined)|596,995,635|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,258,091|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|595,863,252|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:46 GMT+0000 (Coordinated Universal Time)
</details>

