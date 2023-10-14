## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,503|79|
|Intl.DateTimeFormat().format(new Date())|8,573|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,768|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,679|94|
|Reusing Intl.DateTimeFormat()|383,558|93|
|Date.toLocaleDateString()|483,678|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,864|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7503.465663624183,"cycles":6,"stats":{"deviation":0.00010172943594554491,"mean":0.0001332717499925226,"moe":0.000022433093279870858,"rme":16.832594515438938,"sem":0.000011445455755036153,"variance":1.0348878137798724e-8}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8572.790850830297,"cycles":6,"stats":{"deviation":0.000013103853245021854,"mean":0.00011664812747684698,"moe":0.000002889625401330924,"rme":2.477215420285657,"sem":0.0000014742986741484305,"variance":1.7171096986706977e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":6767.805603694575,"cycles":4,"stats":{"deviation":0.0002941409005251836,"mean":0.00014775838115889373,"moe":0.00006940439034479559,"rme":46.97154218965133,"sem":0.000035410403237140606,"variance":8.651886936176596e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":10679.377602216862,"cycles":6,"stats":{"deviation":0.00001056425910028682,"mean":0.00009363841576239578,"moe":0.0000021356554522556514,"rme":2.2807471002871327,"sem":0.000001089620128701863,"variance":1.1160357033799287e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":383557.6666434281,"cycles":5,"stats":{"deviation":0.000004718858846160412,"mean":0.0000026071698911695683,"moe":9.590728208330609e-7,"rme":36.785973329985936,"sem":4.893228677719698e-7,"variance":2.226762880998637e-11}},{"name":"Date.toLocaleDateString()","hz":483677.85909641423,"cycles":3,"stats":{"deviation":1.1489967625589329e-7,"mean":0.000002067491784445449,"moe":2.298472223909668e-8,"rme":1.1117201244532022,"sem":1.1726899101579939e-8,"variance":1.3201935603709088e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":9863.529299264215,"cycles":8,"stats":{"deviation":0.00004899988684208724,"mean":0.00010138358894261068,"moe":0.00001054173518484853,"rme":10.397871386083796,"sem":0.000005378436318800271,"variance":2.400988910537354e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
