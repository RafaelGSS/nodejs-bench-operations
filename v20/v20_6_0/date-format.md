## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,362|78|
|Intl.DateTimeFormat().format(new Date())|10,504|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,790|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,828|95|
|Reusing Intl.DateTimeFormat()|482,953|84|
|Date.toLocaleDateString()|572,892|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,423|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":12361.97653262818,"cycles":5,"stats":{"deviation":0.000014737777513429302,"mean":0.0000808932129389343,"moe":0.000003270700414506574,"rme":4.043232176938752,"sem":0.0000016687247012788644,"variance":2.1720208603534242e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":10504.30240520704,"cycles":4,"stats":{"deviation":0.00009903297418189227,"mean":0.0000951990871382658,"moe":0.000022718228500647164,"rme":23.863914228139112,"sem":0.000011590932908493452,"variance":9.80752997531134e-9}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":13790.134807319851,"cycles":6,"stats":{"deviation":0.000013339882248635674,"mean":0.0000725156072781244,"moe":0.0000028873613665761623,"rme":3.981710248253255,"sem":0.000001473143554375593,"variance":1.779524584074652e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":14828.035895692918,"cycles":5,"stats":{"deviation":0.0000076146590142453515,"mean":0.00006743981516058164,"moe":0.0000015312451601966588,"rme":2.2705358200502106,"sem":7.81247530712581e-7,"variance":5.7983031903227993e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":482952.68927960657,"cycles":4,"stats":{"deviation":0.000002883661664287527,"mean":0.0000020705961933696733,"moe":6.1668123324453e-7,"rme":29.782786002371008,"sem":3.1463328226761736e-7,"variance":8.31550459408151e-12}},{"name":"Date.toLocaleDateString()","hz":572891.7301641342,"cycles":4,"stats":{"deviation":1.4582178502142534e-8,"mean":0.0000017455305205985408,"moe":2.8871240449345497e-9,"rme":0.16540094893010276,"sem":1.4730224719053826e-9,"variance":2.1263992986834784e-16}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":13423.077333497902,"cycles":5,"stats":{"deviation":0.00003317449941122932,"mean":0.0000744985650573922,"moe":0.0000069710921445266075,"rme":9.357350895492038,"sem":0.0000035566796655748,"variance":1.1005474111856546e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
