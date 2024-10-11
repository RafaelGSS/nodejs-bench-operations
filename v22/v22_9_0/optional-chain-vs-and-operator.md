## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|138,282,152|69156878|
|Using optional chain (obj.field?.field2) (undefined)|93,710,258|46855320|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,404,679|47709491|
|Using and operator (obj.field && obj.field.field2) (undefined)|94,937,485|47476067|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:34:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":138282152.720253,"samples":69156878},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":93710258.41182774,"samples":46855320},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95404679.31209624,"samples":47709491},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":94937485.33588764,"samples":47476067}]}-->
