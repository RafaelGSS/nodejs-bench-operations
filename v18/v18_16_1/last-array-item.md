## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,563,411|95|
|Length = 10_000 - Array.at|15,631,139|96|
|Length = 1_000_000 - Array.at|15,558,015|95|
|Length = 100 - Array[length - 1]|709,240,018|93|
|Length = 10_000 - Array[length - 1]|708,409,889|94|
|Length = 1_000_000 - Array[length - 1]|708,281,698|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15563411.477707516,"cycles":6,"stats":{"deviation":7.868671617398159e-10,"mean":6.425326487270255e-8,"moe":1.5823250008670078e-10,"rme":0.2462637507995714,"sem":8.073086739117387e-11,"variance":6.191599302244735e-19}},{"name":"Length = 10_000 - Array.at","hz":15631138.902434135,"cycles":8,"stats":{"deviation":5.431911974724731e-10,"mean":6.397486493094093e-8,"moe":1.0866087010394632e-10,"rme":0.16984931538541376,"sem":5.543921944078894e-11,"variance":2.9505667701157925e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15558014.99875026,"cycles":6,"stats":{"deviation":6.774432164467265e-10,"mean":6.427555186701695e-8,"moe":1.3622824666889065e-10,"rme":0.21194411049280507,"sem":6.950420748412789e-11,"variance":4.589293115096864e-19}},{"name":"Length = 100 - Array[length - 1]","hz":709240017.8557194,"cycles":6,"stats":{"deviation":1.1268716897446176e-11,"mean":1.4099599216402787e-9,"moe":2.2902825565118615e-12,"rme":0.16243600412751152,"sem":1.1685115084244192e-12,"variance":1.26983980514789e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":708409888.9902258,"cycles":7,"stats":{"deviation":8.886742960305808e-12,"mean":1.4116121408545122e-9,"moe":1.796531197862834e-12,"rme":0.12726804664454877,"sem":9.165975499300174e-13,"variance":7.897420044254484e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":708281698.481973,"cycles":7,"stats":{"deviation":8.713338437445196e-12,"mean":1.4118676257529356e-9,"moe":1.7251529948494503e-12,"rme":0.12218942933332312,"sem":8.801800994129848e-13,"variance":7.592226672545989e-23}}]}-->
