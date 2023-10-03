## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,175,912|97|
|Using optional chain (obj.field?.field2) (undefined)|594,414,139|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|595,013,556|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,223,354|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:44 GMT+0000 (Coordinated Universal Time)
</details>

