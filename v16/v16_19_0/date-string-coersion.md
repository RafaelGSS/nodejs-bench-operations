## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|702,609|98|
|Using brackets {}|694,788|91|
|Using '' + |711,583|95|
|Using date.toString()|768,079|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":702608.7988593527,"cycles":6,"stats":{"deviation":2.825473747002808e-8,"mean":0.000001423267117666966,"moe":5.594152610396698e-9,"rme":0.3930500846226736,"sem":2.854159495100356e-9,"variance":7.983301895002089e-16}},{"name":"Using brackets {}","hz":694787.740294096,"cycles":3,"stats":{"deviation":1.9199293121186772e-7,"mean":0.0000014392884934565931,"moe":3.944760259525027e-8,"rme":2.7407710667173446,"sem":2.0126327854719526e-8,"variance":3.686128563532497e-14}},{"name":"Using '' + ","hz":711583.0992707766,"cycles":5,"stats":{"deviation":9.925720814775457e-9,"mean":0.000001405317244078436,"moe":1.995980638220925e-9,"rme":0.14203060886297086,"sem":1.0183574684800638e-9,"variance":9.851993369286675e-17}},{"name":"Using date.toString()","hz":768078.5258097234,"cycles":3,"stats":{"deviation":1.7040327484009086e-8,"mean":0.0000013019502126371524,"moe":3.4633193068077144e-9,"rme":0.26601011875812225,"sem":1.7669996463304666e-9,"variance":2.903727607622754e-16}}]}-->
