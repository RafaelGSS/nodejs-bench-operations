## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,171|78|
|Intl.DateTimeFormat().format(new Date())|7,933|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,558|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,634|86|
|Reusing Intl.DateTimeFormat()|400,958|76|
|Date.toLocaleDateString()|472,786|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,186|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7170.6813640018945,"cycles":3,"stats":{"deviation":0.00007064339183252889,"mean":0.00013945676139232447,"moe":0.00001567762647646587,"rme":11.241926400657649,"sem":0.000007998789018605037,"variance":4.990488809604209e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":7932.960404921135,"cycles":5,"stats":{"deviation":0.000011843237675881893,"mean":0.00012605634579742258,"moe":0.0000025479298699753843,"rme":2.0212626773030578,"sem":0.0000012999642193751962,"variance":1.4026227864742837e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":7558.415822818007,"cycles":3,"stats":{"deviation":0.000019935695079118443,"mean":0.0001323028559742787,"moe":0.0000046049106248498995,"rme":3.4805829329528235,"sem":0.0000023494441963519898,"variance":3.974319382875873e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8634.197178571954,"cycles":3,"stats":{"deviation":0.000015312893463398103,"mean":0.00011581852711005544,"moe":0.0000032364142651369636,"rme":2.7943838916735593,"sem":0.0000016512317679270222,"variance":2.3448470622138033e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":400958.4976614997,"cycles":5,"stats":{"deviation":0.000002894533569517392,"mean":0.0000024940237102649655,"moe":6.507705122025329e-7,"rme":26.093196689513228,"sem":3.3202577153190456e-7,"variance":8.378324585063094e-12}},{"name":"Date.toLocaleDateString()","hz":472786.0514031677,"cycles":3,"stats":{"deviation":1.0948930614822468e-7,"mean":0.000002115121622205498,"moe":2.249609196600402e-8,"rme":1.0635838492609564,"sem":1.1477597941838785e-8,"variance":1.1987908160819673e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8185.511574847955,"cycles":3,"stats":{"deviation":0.00004063361330553611,"mean":0.0001221670742086239,"moe":0.00000890423310921663,"rme":7.288570318063712,"sem":0.000004542976076130934,"variance":1.6510905302638413e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
