## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,961|61|
|[True conditional] Using constructor name|144,976|94|
|[True conditional] Check if property is valid then instanceof |146,595|96|
|[False conditional] Using instanceof only|716,804,341|97|
|[False conditional] Using constructor name|715,438,387|96|
|[False conditional] Check if property is valid then instanceof |717,910,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":177960.78067782472,"cycles":3,"stats":{"deviation":0.0000011359136032553579,"mean":0.000005619215628247734,"moe":2.85060113922933e-7,"rme":5.0729520413834805,"sem":1.454388336341495e-7,"variance":1.2902997140605706e-12}},{"name":"[True conditional] Using constructor name","hz":144976.11047442746,"cycles":3,"stats":{"deviation":3.708543984899323e-7,"mean":0.0000068976881551556825,"moe":7.497139275072407e-8,"rme":1.0869060917850664,"sem":3.8250710587104115e-8,"variance":1.375329848793295e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":146594.757997094,"cycles":3,"stats":{"deviation":3.2316451855042284e-7,"mean":0.0000068215263196506874,"moe":6.464636749602587e-8,"rme":0.9476818598471117,"sem":3.298284055919687e-8,"variance":1.044353060499266e-13}},{"name":"[False conditional] Using instanceof only","hz":716804341.2763038,"cycles":8,"stats":{"deviation":3.272054029575534e-11,"mean":1.3950808364517617e-9,"moe":6.511644321637466e-12,"rme":0.46675749185969273,"sem":3.3222675110395237e-12,"variance":1.0706337572461488e-21}},{"name":"[False conditional] Using constructor name","hz":715438387.4842683,"cycles":7,"stats":{"deviation":4.829732614471628e-11,"mean":1.3977444004875807e-9,"moe":9.661477407952468e-12,"rme":0.6912191817461201,"sem":4.9293252081390146e-12,"variance":2.3326317127290946e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":717910496.1002924,"cycles":6,"stats":{"deviation":4.2036999020836696e-11,"mean":1.3929312991410834e-9,"moe":8.498139368134008e-12,"rme":0.6100903449706511,"sem":4.335785391905106e-12,"variance":1.7671092866778256e-21}}]}-->
