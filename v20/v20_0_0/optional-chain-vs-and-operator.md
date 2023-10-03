## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,296,278|94|
|Using optional chain (obj.field?.field2) (undefined)|715,656,228|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|717,219,058|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|716,313,940|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:41 GMT+0000 (Coordinated Universal Time)
</details>

