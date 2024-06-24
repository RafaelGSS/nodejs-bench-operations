## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,089,058|10044530|
|Using optional chain (obj.field?.field2) (undefined)|20,084,172|10042087|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,085,972|10042987|
|Using and operator (obj.field && obj.field.field2) (undefined)|20,142,234|10071118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:02:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20089058.553578377,"samples":10044530},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20084172.152247537,"samples":10042087},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20085972.51367268,"samples":10042987},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":20142234.751175456,"samples":10071118}]}-->
