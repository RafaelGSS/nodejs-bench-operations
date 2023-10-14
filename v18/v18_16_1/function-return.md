## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,348,630|95|
|Function returning explicitly undefined|1,359,675|93|
|Function returning implicitly undefined|1,378,238|94|
|Function returning string|1,370,178|95|
|Function returning integer|1,379,127|94|
|Function returning float|1,349,901|94|
|Function returning functions|1,349,349|95|
|Function returning arrow functions|1,356,732|97|
|Function returning empty object|1,377,357|94|
|Function returning empty array|1,349,931|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1348630.3805796222,"cycles":6,"stats":{"deviation":2.449766440072456e-8,"mean":7.414930097972538e-7,"moe":4.926278376950945e-9,"rme":0.6643728682348516,"sem":2.5134073351790533e-9,"variance":6.001355610905275e-16}},{"name":"Function returning explicitly undefined","hz":1359675.1978095965,"cycles":6,"stats":{"deviation":3.4095850197544214e-9,"mean":7.354697663169671e-7,"moe":6.929726930541163e-10,"rme":0.09422177835050044,"sem":3.535574964561818e-10,"variance":1.162527000693376e-17}},{"name":"Function returning implicitly undefined","hz":1378237.971459044,"cycles":6,"stats":{"deviation":1.1047198516393975e-8,"mean":7.255641048268103e-7,"moe":2.2332857912436837e-9,"rme":0.30779992786120003,"sem":1.1394315261447366e-9,"variance":1.2204059506061725e-16}},{"name":"Function returning string","hz":1370177.5372684458,"cycles":5,"stats":{"deviation":4.566615629616799e-9,"mean":7.298324288643477e-7,"moe":9.183087605429884e-10,"rme":0.1258246035972831,"sem":4.685248778280553e-10,"variance":2.085397830866044e-17}},{"name":"Function returning integer","hz":1379126.9575395496,"cycles":5,"stats":{"deviation":1.174838068233439e-8,"mean":7.250964057609777e-7,"moe":2.3750357711996295e-9,"rme":0.3275475857182143,"sem":1.2117529444896069e-9,"variance":1.3802444865704784e-16}},{"name":"Function returning float","hz":1349900.936413915,"cycles":6,"stats":{"deviation":5.864119785517504e-9,"mean":7.407951006068299e-7,"moe":1.185482036528305e-9,"rme":0.1600283311211434,"sem":6.048377737389312e-10,"variance":3.4387900858897855e-17}},{"name":"Function returning functions","hz":1349349.2288148494,"cycles":6,"stats":{"deviation":4.123428286784767e-9,"mean":7.410979890493677e-7,"moe":8.291874390888822e-10,"rme":0.11188634314775431,"sem":4.230548158616746e-10,"variance":1.7002660836256763e-17}},{"name":"Function returning arrow functions","hz":1356731.6652769158,"cycles":7,"stats":{"deviation":1.7795563161300374e-8,"mean":7.370654239104052e-7,"moe":3.54145673519501e-9,"rme":0.48048064938472757,"sem":1.8068656812219438e-9,"variance":3.1668206822783095e-16}},{"name":"Function returning empty object","hz":1377357.4810688295,"cycles":5,"stats":{"deviation":1.2069247866375145e-8,"mean":7.260279293825739e-7,"moe":2.439901820445615e-9,"rme":0.33606170254642237,"sem":1.2448478675742934e-9,"variance":1.45666744060001e-16}},{"name":"Function returning empty array","hz":1349931.3194749572,"cycles":5,"stats":{"deviation":6.650633913958749e-9,"mean":7.407784274454351e-7,"moe":1.3235283454881392e-9,"rme":0.17866723657873107,"sem":6.752695640245608e-10,"variance":4.4230931457498267e-17}}]}-->
