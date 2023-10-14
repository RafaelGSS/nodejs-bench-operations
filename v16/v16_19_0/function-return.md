## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|983,270|86|
|Function returning explicitly undefined|1,003,016|90|
|Function returning implicitly undefined|1,007,493|88|
|Function returning string|1,025,659|90|
|Function returning integer|1,046,177|91|
|Function returning float|1,075,191|95|
|Function returning functions|1,045,729|96|
|Function returning arrow functions|1,012,241|92|
|Function returning empty object|1,063,502|93|
|Function returning empty array|1,057,055|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":983270.2451285738,"cycles":4,"stats":{"deviation":1.445919262695993e-7,"mean":0.0000010170144016401498,"moe":3.055982684925686e-8,"rme":3.0048568437155567,"sem":1.559174839247799e-8,"variance":2.0906825142353245e-14}},{"name":"Function returning explicitly undefined","hz":1003016.3703775946,"cycles":5,"stats":{"deviation":4.118087702549707e-8,"mean":9.969927007507773e-7,"moe":8.508057339666216e-9,"rme":0.8533720791796462,"sem":4.340845581462355e-9,"variance":1.6958646325891126e-15}},{"name":"Function returning implicitly undefined","hz":1007493.4067981913,"cycles":6,"stats":{"deviation":4.575898217048665e-8,"mean":9.925623267133775e-7,"moe":9.560730822882331e-9,"rme":0.9632373268226194,"sem":4.877923889225679e-9,"variance":2.093884449278915e-15}},{"name":"Function returning string","hz":1025659.2483003045,"cycles":5,"stats":{"deviation":8.591838100848786e-8,"mean":9.749826773922954e-7,"moe":1.7750921421583785e-8,"rme":1.8206396721899398,"sem":9.056592562032544e-9,"variance":7.381968195119687e-15}},{"name":"Function returning integer","hz":1046177.0825987936,"cycles":8,"stats":{"deviation":5.73382684575814e-8,"mean":9.558611220157053e-7,"moe":1.1780940128042753e-8,"rme":1.2324949573426824,"sem":6.0106837387973235e-9,"variance":3.287677029713674e-15}},{"name":"Function returning float","hz":1075191.409814451,"cycles":6,"stats":{"deviation":1.0569935806665963e-8,"mean":9.300669544714583e-7,"moe":2.125526962831526e-9,"rme":0.22853483317654566,"sem":1.084452532056901e-9,"variance":1.1172354295703923e-16}},{"name":"Function returning functions","hz":1045729.2677247764,"cycles":6,"stats":{"deviation":7.310761518999964e-9,"mean":9.56270452462069e-7,"moe":1.4624568871391577e-9,"rme":0.15293339696670874,"sem":7.461514730301825e-10,"variance":5.3447233987690666e-17}},{"name":"Function returning arrow functions","hz":1012241.2198241412,"cycles":7,"stats":{"deviation":7.815865869943447e-8,"mean":9.879068155056282e-7,"moe":1.5971262783755482e-8,"rme":1.6166770522360558,"sem":8.148603461099736e-9,"variance":6.1087759296946846e-15}},{"name":"Function returning empty object","hz":1063501.8988415494,"cycles":6,"stats":{"deviation":3.5630942417776745e-8,"mean":9.402898115078866e-7,"moe":7.241722960491335e-9,"rme":0.7701586119366981,"sem":3.6947566124955793e-9,"variance":1.2695640575789223e-15}},{"name":"Function returning empty array","hz":1057054.8454083095,"cycles":7,"stats":{"deviation":6.120788623502737e-9,"mean":9.460247066118212e-7,"moe":1.2244127309994704e-9,"rme":0.12942714100826114,"sem":6.247003729589135e-10,"variance":3.746405337360052e-17}}]}-->
