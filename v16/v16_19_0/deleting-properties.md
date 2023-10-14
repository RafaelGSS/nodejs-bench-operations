## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,403,062|93|
|Using delete property (proto: null)|12,142,342|94|
|Using delete property (cached proto: null)|2,397,406|99|
|Using undefined assignment|711,811,673|95|
|Using undefined assignment (proto: null)|14,818,876|94|
|Using undefined property (cached proto: null)|708,818,395|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2403062.2025097627,"cycles":6,"stats":{"deviation":1.004198893851514e-8,"mean":4.161357117412933e-7,"moe":2.040959259858462e-9,"rme":0.4904552054228171,"sem":1.0413057448257459e-9,"variance":1.0084154184126043e-16}},{"name":"Using delete property (proto: null)","hz":12142341.990988987,"cycles":5,"stats":{"deviation":5.6959491891377005e-9,"mean":8.235643508823216e-8,"moe":1.1514849102122853e-9,"rme":1.3981723577260814,"sem":5.87492301128717e-10,"variance":3.244383716523843e-17}},{"name":"Using delete property (cached proto: null)","hz":2397405.686407892,"cycles":6,"stats":{"deviation":6.818327359122342e-9,"mean":4.171175557268037e-7,"moe":1.3431246592159485e-9,"rme":0.3220014695558977,"sem":6.852676832734432e-10,"variance":4.6489587976156244e-17}},{"name":"Using undefined assignment","hz":711811673.4604921,"cycles":7,"stats":{"deviation":1.0591867933662431e-11,"mean":1.404865974083387e-9,"moe":2.1299373327841837e-12,"rme":0.1516114257215087,"sem":1.086702720808257e-12,"variance":1.1218766632414648e-22}},{"name":"Using undefined assignment (proto: null)","hz":14818876.248002438,"cycles":7,"stats":{"deviation":1.2671029576768701e-9,"mean":6.748150016670788e-8,"moe":2.5615571470207494e-10,"rme":0.3795939836388667,"sem":1.3069169117452804e-10,"variance":1.6055499053534723e-18}},{"name":"Using undefined property (cached proto: null)","hz":708818394.6192923,"cycles":9,"stats":{"deviation":1.0559812809183109e-11,"mean":1.4107986017167372e-9,"moe":2.1234913114815042e-12,"rme":0.15051697023923355,"sem":1.083413934429339e-12,"variance":1.1150964656498766e-22}}]}-->
