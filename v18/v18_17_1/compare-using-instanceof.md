## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,831|54|
|[True conditional] Using constructor name|131,008|94|
|[True conditional] Check if property is valid then instanceof |131,458|93|
|[False conditional] Using instanceof only|593,451,559|96|
|[False conditional] Using constructor name|593,230,398|96|
|[False conditional] Check if property is valid then instanceof |592,691,519|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":167830.80529707723,"cycles":4,"stats":{"deviation":0.0000012470919961925688,"mean":0.000005958381706087273,"moe":3.326271413245646e-7,"rme":5.582508099216639,"sem":1.6970772516559418e-7,"variance":1.5552384469675662e-12}},{"name":"[True conditional] Using constructor name","hz":131008.01417682931,"cycles":3,"stats":{"deviation":2.9404654968468367e-7,"mean":0.000007633120815420044,"moe":5.944402831183942e-8,"rme":0.7787644103805302,"sem":3.032858587338746e-8,"variance":8.646337338146716e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":131458.16221343543,"cycles":3,"stats":{"deviation":2.663708184777077e-7,"mean":0.000007606982960680678,"moe":5.413787964284914e-8,"rme":0.7116866163981107,"sem":2.7621367164718948e-8,"variance":7.095341293648391e-14}},{"name":"[False conditional] Using instanceof only","hz":593451558.5971967,"cycles":6,"stats":{"deviation":9.878723866000566e-12,"mean":1.6850575005040078e-9,"moe":1.9761563438270547e-12,"rme":0.11727530622759033,"sem":1.0082430325648239e-12,"variance":9.758918522068915e-23}},{"name":"[False conditional] Using constructor name","hz":593230397.7710047,"cycles":6,"stats":{"deviation":1.298952493511404e-11,"mean":1.6856857028186445e-9,"moe":2.598446160862034e-12,"rme":0.15414772495947243,"sem":1.3257378371745072e-12,"variance":1.6872775803994944e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":592691519.0691139,"cycles":5,"stats":{"deviation":2.118001361560294e-11,"mean":1.6872183384209851e-9,"moe":4.2817211436799454e-12,"rme":0.253773980887801,"sem":2.1845516039183393e-12,"variance":4.4859297675712595e-22}}]}-->
