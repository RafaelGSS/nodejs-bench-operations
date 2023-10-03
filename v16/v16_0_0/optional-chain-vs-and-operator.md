## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|579,025,012|87|
|Using optional chain (obj.field?.field2) (undefined)|559,882,624|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|585,185,596|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|582,673,936|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:48 GMT+0000 (Coordinated Universal Time)
</details>

