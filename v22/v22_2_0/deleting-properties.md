## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,343,147|1671574|
|Using delete property (proto: null)|7,796,564|3898283|
|Using delete property (cached proto: null)|3,297,604|1648803|
|Using undefined assignment|16,106,337|8053169|
|Using undefined assignment (proto: null)|8,458,845|4229423|
|Using undefined property (cached proto: null)|16,102,131|8051066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:25:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3343147.5185876265,"samples":1671574},{"name":"Using delete property (proto: null)","opsSec":7796564.581029184,"samples":3898283},{"name":"Using delete property (cached proto: null)","opsSec":3297604.318218919,"samples":1648803},{"name":"Using undefined assignment","opsSec":16106337.22683051,"samples":8053169},{"name":"Using undefined assignment (proto: null)","opsSec":8458845.881581226,"samples":4229423},{"name":"Using undefined property (cached proto: null)","opsSec":16102131.420338184,"samples":8051066}]}-->
