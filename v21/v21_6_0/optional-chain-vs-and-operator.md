## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,223,654|95|
|Using optional chain (obj.field?.field2) (undefined)|822,043,147|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,378,090|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,108,416|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821223653.9487972,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822043146.8237574,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822378090.1189699,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821108416.3986317,"samples":7}]}-->
