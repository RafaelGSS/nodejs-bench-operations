## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,187,842|87|
|fromUnixToISOString(new Date())|995,824|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":1187842.2062338681,"cycles":4,"stats":{"deviation":5.235294398946833e-8,"mean":8.418626605048542e-7,"moe":1.1001136507406917e-8,"rme":1.3067614260038183,"sem":5.612824748676998e-9,"variance":2.7408307443644083e-15}},{"name":"fromUnixToISOString(new Date())","hz":995823.803808238,"cycles":7,"stats":{"deviation":8.587959590188456e-8,"mean":0.0000010041937099472732,"moe":1.8588277074907047e-8,"rme":1.8510648782975405,"sem":9.48381483413625e-9,"variance":7.375304992270987e-15}}]}-->
