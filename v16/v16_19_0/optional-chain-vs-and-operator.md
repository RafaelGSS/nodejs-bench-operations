## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|716,559,094|95|
|Using optional chain (obj.field?.field2) (undefined)|717,621,071|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|717,277,067|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|716,240,183|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:38 GMT+0000 (Coordinated Universal Time)
</details>

