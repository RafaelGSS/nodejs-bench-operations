## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|923,703|94|
|fromUnixToISOString(new Date())|1,541,002|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":923702.7223736314,"cycles":5,"stats":{"deviation":1.3670934349092217e-7,"mean":0.000001082599385904491,"moe":2.7636964601971168e-8,"rme":2.5528339440984453,"sem":1.410049214386284e-8,"variance":1.8689444597718942e-14}},{"name":"fromUnixToISOString(new Date())","hz":1541002.3851316215,"cycles":5,"stats":{"deviation":2.2595265730441942e-8,"mean":6.489282623106305e-7,"moe":4.496635216277545e-9,"rme":0.692932559335054,"sem":2.294201640957931e-9,"variance":5.105460334292841e-16}}]}-->
