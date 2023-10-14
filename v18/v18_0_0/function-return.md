## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,352,530|97|
|Function returning explicitly undefined|1,336,699|98|
|Function returning implicitly undefined|1,382,624|92|
|Function returning string|1,359,752|97|
|Function returning integer|1,387,624|97|
|Function returning float|1,279,209|96|
|Function returning functions|1,310,898|95|
|Function returning arrow functions|1,351,587|95|
|Function returning empty object|1,343,017|95|
|Function returning empty array|1,356,132|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1352529.8357188157,"cycles":5,"stats":{"deviation":2.4145024782322747e-8,"mean":7.393552242553968e-7,"moe":4.805049430678369e-9,"rme":0.6498972717096204,"sem":2.45155583197876e-9,"variance":5.829822217389796e-16}},{"name":"Function returning explicitly undefined","hz":1336698.6515163868,"cycles":8,"stats":{"deviation":5.1272867618929905e-8,"mean":7.481117743820368e-7,"moe":1.0151509867583136e-8,"rme":1.3569509550853671,"sem":5.179341769175069e-9,"variance":2.628906953868311e-15}},{"name":"Function returning implicitly undefined","hz":1382624.1159229637,"cycles":7,"stats":{"deviation":2.5742734924858793e-8,"mean":7.232623736874828e-7,"moe":5.260376663301856e-9,"rme":0.7273123633519517,"sem":2.683865644541763e-9,"variance":6.626884014115446e-16}},{"name":"Function returning string","hz":1359752.4115106633,"cycles":7,"stats":{"deviation":2.1232036189985873e-8,"mean":7.354280025795401e-7,"moe":4.225341838602153e-9,"rme":0.5745418754496178,"sem":2.155786652348037e-9,"variance":4.507993607728699e-16}},{"name":"Function returning integer","hz":1387624.4694211672,"cycles":6,"stats":{"deviation":2.222195620248674e-8,"mean":7.206560723285165e-7,"moe":4.422343690344582e-9,"rme":0.6136552316912448,"sem":2.2562978011962155e-9,"variance":4.93815337465239e-16}},{"name":"Function returning float","hz":1279208.6069333768,"cycles":7,"stats":{"deviation":2.09644426092575e-8,"mean":7.817333268240601e-7,"moe":4.193761949321e-9,"rme":0.536469638100112,"sem":2.139674463939286e-9,"variance":4.395078539168515e-16}},{"name":"Function returning functions","hz":1310898.25326849,"cycles":6,"stats":{"deviation":2.0198999130315e-8,"mean":7.628357101755831e-7,"moe":4.061852224932049e-9,"rme":0.5324674986698152,"sem":2.0723735841490045e-9,"variance":4.079995658664662e-16}},{"name":"Function returning arrow functions","hz":1351586.8933313047,"cycles":7,"stats":{"deviation":2.2558341437305567e-8,"mean":7.39871039689697e-7,"moe":4.536296514829718e-9,"rme":0.6131198913708323,"sem":2.314436997362101e-9,"variance":5.088787684020573e-16}},{"name":"Function returning empty object","hz":1343016.728214164,"cycles":6,"stats":{"deviation":2.595736863204176e-8,"mean":7.445923635885905e-7,"moe":5.2198128655395395e-9,"rme":0.7010295996567112,"sem":2.663169829356908e-9,"variance":6.737849862997056e-16}},{"name":"Function returning empty array","hz":1356131.5680531596,"cycles":7,"stats":{"deviation":1.715273361219725e-8,"mean":7.373915802546973e-7,"moe":3.5050603546519132e-9,"rme":0.4753322994875063,"sem":1.7882960993122007e-9,"variance":2.942162703710014e-16}}]}-->
