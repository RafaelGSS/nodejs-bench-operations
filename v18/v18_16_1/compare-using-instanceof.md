## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,273|56|
|[True conditional] Using constructor name|146,734|93|
|[True conditional] Check if property is valid then instanceof |147,608|92|
|[False conditional] Using instanceof only|710,974,986|98|
|[False conditional] Using constructor name|711,841,869|97|
|[False conditional] Check if property is valid then instanceof |713,065,857|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":184272.5943633215,"cycles":4,"stats":{"deviation":0.0000011764076378405378,"mean":0.0000054267429373048695,"moe":3.0812000295883324e-7,"rme":5.677807232045849,"sem":1.5720408314226185e-7,"variance":1.3839349303695538e-12}},{"name":"[True conditional] Using constructor name","hz":146734.00783500823,"cycles":3,"stats":{"deviation":2.2368767502594483e-7,"mean":0.00000681505272536703,"moe":4.546284948685857e-8,"rme":0.6670946112806506,"sem":2.319533137084621e-8,"variance":5.00361759585127e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":147608.2613658252,"cycles":3,"stats":{"deviation":2.0127942703370273e-7,"mean":0.000006774688562462288,"moe":4.1130268553882737e-8,"rme":0.6071167430748104,"sem":2.098483089483813e-8,"variance":4.051340774701566e-14}},{"name":"[False conditional] Using instanceof only","hz":710974986.1541065,"cycles":9,"stats":{"deviation":1.3464662772632666e-11,"mean":1.4065192439600769e-9,"moe":2.6658672188172133e-12,"rme":0.18953649089872546,"sem":1.3601363361312314e-12,"variance":1.8129714358072002e-22}},{"name":"[False conditional] Using constructor name","hz":711841869.1926676,"cycles":6,"stats":{"deviation":9.859949554456344e-12,"mean":1.4048063808527387e-9,"moe":1.9622073458315243e-12,"rme":0.13967813448002955,"sem":1.0011261968528185e-12,"variance":9.721860521642385e-23}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":713065857.3402686,"cycles":9,"stats":{"deviation":9.911199987403026e-12,"mean":1.4023950098101655e-9,"moe":2.0363930894605596e-12,"rme":0.14520823842179922,"sem":1.038976066051306e-12,"variance":9.823188519029773e-23}}]}-->
