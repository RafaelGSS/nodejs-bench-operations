## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|588,094,263|96|
|Using optional chain (obj.field?.field2) (undefined)|588,074,915|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,259,327|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,522,763|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>

