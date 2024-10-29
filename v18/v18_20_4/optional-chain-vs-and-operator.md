## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|151,966,213|76001582|
|Using optional chain (obj.field?.field2) (undefined)|102,557,318|51278772|
|Using and operator (obj.field && obj.field.field2) (Valid)|105,239,481|52619748|
|Using and operator (obj.field && obj.field.field2) (undefined)|104,440,721|52220371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":151966213.11134955,"samples":76001582},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":102557318.57901376,"samples":51278772},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":105239481.89790943,"samples":52619748},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":104440721.73849997,"samples":52220371}]}-->
