## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|586,471,866|98|
|Using optional chain (obj.field?.field2) (undefined)|593,634,165|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,476,866|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,706,068|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:45 GMT+0000 (Coordinated Universal Time)
</details>

