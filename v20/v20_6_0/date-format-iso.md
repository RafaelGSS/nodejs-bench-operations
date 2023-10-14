## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|963,656|91|
|fromUnixToISOString(new Date())|1,567,124|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":963655.8655835451,"cycles":7,"stats":{"deviation":8.738835253450707e-8,"mean":0.0000010377148479187087,"moe":1.7955145434134502e-8,"rme":1.730258121500932,"sem":9.160788486803318e-9,"variance":7.636724158695288e-15}},{"name":"fromUnixToISOString(new Date())","hz":1567123.6110113605,"cycles":6,"stats":{"deviation":2.4693365386215434e-8,"mean":6.381117564520893e-7,"moe":4.91417351443087e-9,"rme":0.7701117343071293,"sem":2.507231384913709e-9,"variance":6.097622940971425e-16}}]}-->
