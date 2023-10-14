## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,398|61|
|[True conditional] Using constructor name|140,982|94|
|[True conditional] Check if property is valid then instanceof |141,290|93|
|[False conditional] Using instanceof only|716,436,019|95|
|[False conditional] Using constructor name|716,379,948|95|
|[False conditional] Check if property is valid then instanceof |715,812,355|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":171398.32531488896,"cycles":3,"stats":{"deviation":0.00000108489059124653,"mean":0.000005834362722989409,"moe":2.7225577248865055e-7,"rme":4.666418346186612,"sem":1.389060063717605e-7,"variance":1.1769875949752456e-12}},{"name":"[True conditional] Using constructor name","hz":140981.70666410544,"cycles":3,"stats":{"deviation":3.585299852579765e-7,"mean":0.000007093118842592395,"moe":7.247990706632206e-8,"rme":1.021834099706584,"sem":3.697954442159289e-8,"variance":1.2854375032908484e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":141290.46448648776,"cycles":3,"stats":{"deviation":5.401021305469617e-7,"mean":0.0000070776184623247135,"moe":1.0977172464124431e-7,"rme":1.5509697962044242,"sem":5.600598195981853e-8,"variance":2.917103114213673e-13}},{"name":"[False conditional] Using instanceof only","hz":716436018.8204552,"cycles":7,"stats":{"deviation":2.43038089150066e-11,"mean":1.395798052764581e-9,"moe":4.887295636722146e-12,"rme":0.35014346287717957,"sem":2.493518182001095e-12,"variance":5.906751277771542e-22}},{"name":"[False conditional] Using constructor name","hz":716379948.2313871,"cycles":6,"stats":{"deviation":3.733786741533361e-11,"mean":1.3959073009634338e-9,"moe":7.508337361506958e-12,"rme":0.5378822330340144,"sem":3.830784368115795e-12,"variance":1.3941163431250313e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":715812355.1508965,"cycles":7,"stats":{"deviation":3.443945755420742e-11,"mean":1.3970141655199502e-9,"moe":6.853722346761524e-12,"rme":0.4905979134585696,"sem":3.4967971156946553e-12,"variance":1.1860762366280543e-21}}]}-->
