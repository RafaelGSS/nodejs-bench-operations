## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,675,438|97|
|Using optional chain (obj.field?.field2) (undefined)|710,899,358|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,830,834|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,723,291|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:33:17 GMT+0000 (Coordinated Universal Time)
</details>

