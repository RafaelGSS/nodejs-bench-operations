## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,235,653|98|
|Function returning explicitly undefined|1,258,250|95|
|Function returning implicitly undefined|1,274,285|97|
|Function returning string|1,238,588|98|
|Function returning integer|1,283,851|95|
|Function returning float|1,259,537|97|
|Function returning functions|1,249,939|97|
|Function returning arrow functions|1,221,567|98|
|Function returning empty object|1,276,068|98|
|Function returning empty array|1,253,181|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1235653.133044165,"cycles":6,"stats":{"deviation":2.2195544306534857e-8,"mean":8.092886047530117e-7,"moe":4.394493569557633e-9,"rme":0.5430069747366326,"sem":2.242088555896752e-9,"variance":4.926421870633519e-16}},{"name":"Function returning explicitly undefined","hz":1258250.36819377,"cycles":7,"stats":{"deviation":6.7872673451121665e-9,"mean":7.947543869472569e-7,"moe":1.3648635157163136e-9,"rme":0.1717340021184295,"sem":6.96358936589956e-10,"variance":4.606699801402595e-17}},{"name":"Function returning implicitly undefined","hz":1274285.1933158746,"cycles":6,"stats":{"deviation":1.3808404530716833e-8,"mean":7.847536840617721e-7,"moe":2.7479808750278972e-9,"rme":0.350171134056325,"sem":1.4020310586877027e-9,"variance":1.9067203568392113e-16}},{"name":"Function returning string","hz":1238587.5050258907,"cycles":5,"stats":{"deviation":7.022794695416461e-9,"mean":8.073712966925955e-7,"moe":1.3904424105627703e-9,"rme":0.17221845961811266,"sem":7.094093931442706e-10,"variance":4.9319645333969585e-17}},{"name":"Function returning integer","hz":1283851.4105804516,"cycles":7,"stats":{"deviation":1.2240635551596444e-8,"mean":7.789063374147655e-7,"moe":2.461490909973567e-9,"rme":0.3160188576900524,"sem":1.2558627091701872e-9,"variance":1.498331587070068e-16}},{"name":"Function returning float","hz":1259536.5821248903,"cycles":6,"stats":{"deviation":7.427875714465778e-9,"mean":7.939427994325965e-7,"moe":1.4782055638673058e-9,"rme":0.18618539835914227,"sem":7.541865121771969e-10,"variance":5.51733376295505e-17}},{"name":"Function returning functions","hz":1249939.2743165526,"cycles":6,"stats":{"deviation":3.9317146625797215e-9,"mean":8.000388663255538e-7,"moe":7.824420753897885e-10,"rme":0.09780050799074495,"sem":3.9920514050499415e-10,"variance":1.545838018794437e-17}},{"name":"Function returning arrow functions","hz":1221566.633014102,"cycles":7,"stats":{"deviation":1.617395108543734e-8,"mean":8.186209192146916e-7,"moe":3.202278937505834e-9,"rme":0.39117970996609774,"sem":1.633815784441752e-9,"variance":2.615966937141197e-16}},{"name":"Function returning empty object","hz":1276068.4828327564,"cycles":6,"stats":{"deviation":3.890806446727482e-9,"mean":7.836570007434795e-7,"moe":7.703403743742946e-10,"rme":0.09830070727926236,"sem":3.9303080325219115e-10,"variance":1.5138374805896134e-17}},{"name":"Function returning empty array","hz":1253180.8559422286,"cycles":5,"stats":{"deviation":1.1059316705338362e-8,"mean":7.979694193845073e-7,"moe":2.235735586922194e-9,"rme":0.2801781036479656,"sem":1.1406814218990786e-9,"variance":1.2230848598897617e-16}}]}-->
