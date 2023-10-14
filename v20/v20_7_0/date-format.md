## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,935|80|
|Intl.DateTimeFormat().format(new Date())|11,722|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,892|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,574|88|
|Reusing Intl.DateTimeFormat()|538,899|91|
|Date.toLocaleDateString()|623,917|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,890|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":12935.29574457268,"cycles":4,"stats":{"deviation":0.000012353256770569645,"mean":0.0000773078574890392,"moe":0.0000027070267444853187,"rme":3.501619152838538,"sem":0.0000013811360941251625,"variance":1.526029528396248e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":11722.10885866452,"cycles":6,"stats":{"deviation":0.00007916663408515536,"mean":0.00008530888187929082,"moe":0.000017457606744584228,"rme":20.463996667177227,"sem":0.000008906942216624606,"variance":6.2673559523728835e-9}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":11892.04605170045,"cycles":6,"stats":{"deviation":0.00009618458513024325,"mean":0.0000840898189977165,"moe":0.000022064806205006,"rme":26.239569151177722,"sem":0.000011257554186227552,"variance":9.25147441667701e-9}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":15573.589775077586,"cycles":4,"stats":{"deviation":0.000006974512461634785,"mean":0.0000642112714179938,"moe":0.0000014572316319906345,"rme":2.269432764388897,"sem":7.43485526525834e-7,"variance":4.864382407749891e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":538899.2798671884,"cycles":6,"stats":{"deviation":0.0000021813017256311175,"mean":0.0000018556343223291183,"moe":4.4817860256571313e-7,"rme":24.152312617454562,"sem":2.2866255232944547e-7,"variance":4.7580772182412905e-12}},{"name":"Date.toLocaleDateString()","hz":623917.4117493174,"cycles":4,"stats":{"deviation":9.004962375492829e-8,"mean":0.0000016027762347523458,"moe":1.830191355265197e-8,"rme":1.1418882533830372,"sem":9.337710996251005e-9,"variance":8.108934738404146e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":14889.887456912937,"cycles":4,"stats":{"deviation":0.000023473450386927823,"mean":0.00006715967483929702,"moe":0.0000050198802835947354,"rme":7.47454524699018,"sem":0.0000025611634099973142,"variance":5.510028730675619e-10}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
