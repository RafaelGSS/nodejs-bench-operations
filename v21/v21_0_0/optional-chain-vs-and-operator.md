## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,502,256|8251129|
|Using optional chain (obj.field?.field2) (undefined)|16,571,001|8285501|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,565,117|8282559|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,619,824|8309913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16502256.9691755,"samples":8251129},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16571001.636523211,"samples":8285501},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16565117.65245,"samples":8282559},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16619824.383310234,"samples":8309913}]}-->
