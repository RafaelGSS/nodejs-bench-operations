## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|672,489|94|
|Using brackets {}|713,247|94|
|Using '' + |720,184|95|
|Using date.toString()|777,557|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":672489.399708557,"cycles":3,"stats":{"deviation":1.62171741464245e-7,"mean":0.0000014870122866373497,"moe":3.278440641904605e-8,"rme":2.2047165792545638,"sem":1.6726737968901044e-8,"variance":2.629967372954592e-14}},{"name":"Using brackets {}","hz":713246.6834180397,"cycles":4,"stats":{"deviation":1.2711752072357643e-7,"mean":0.0000014020394671977631,"moe":2.5697895482623683e-8,"rme":1.8328938723804766,"sem":1.311117116460392e-8,"variance":1.6158864074908884e-14}},{"name":"Using '' + ","hz":720183.597665866,"cycles":6,"stats":{"deviation":1.2178937069464751e-8,"mean":0.0000013885348170119763,"moe":2.449083853796935e-9,"rme":0.17637900208128604,"sem":1.2495325784678241e-9,"variance":1.4832650814198267e-16}},{"name":"Using date.toString()","hz":777557.1065528349,"cycles":4,"stats":{"deviation":1.13874605478121e-8,"mean":0.0000012860791722852708,"moe":2.277966537670798e-9,"rme":0.1771249069855485,"sem":1.1622278253422439e-9,"variance":1.2967425772797707e-16}}]}-->
