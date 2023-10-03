## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|589,685,748|97|
|Using optional chain (obj.field?.field2) (undefined)|589,309,491|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,541,239|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,068,294|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>

