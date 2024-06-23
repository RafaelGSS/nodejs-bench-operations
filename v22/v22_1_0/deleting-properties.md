## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,281,510|1640756|
|Using delete property (proto: null)|8,318,553|4159277|
|Using delete property (cached proto: null)|3,299,243|1649622|
|Using undefined assignment|16,253,086|8126544|
|Using undefined assignment (proto: null)|8,556,692|4278347|
|Using undefined property (cached proto: null)|16,308,948|8154475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:24:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3281510.3198667755,"samples":1640756},{"name":"Using delete property (proto: null)","opsSec":8318553.750438037,"samples":4159277},{"name":"Using delete property (cached proto: null)","opsSec":3299243.940618342,"samples":1649622},{"name":"Using undefined assignment","opsSec":16253086.732237637,"samples":8126544},{"name":"Using undefined assignment (proto: null)","opsSec":8556692.254423356,"samples":4278347},{"name":"Using undefined property (cached proto: null)","opsSec":16308948.825819304,"samples":8154475}]}-->
