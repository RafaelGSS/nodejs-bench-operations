## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|143,164,516|81|
|Using optional chain (obj.field?.field2) (undefined)|147,456,621|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|142,548,141|80|
|Using and operator (obj.field && obj.field.field2) (undefined)|143,966,501|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":143164515.64778346,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":147456620.62158588,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":142548140.5359494,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":143966500.99744987,"samples":5}]}-->
