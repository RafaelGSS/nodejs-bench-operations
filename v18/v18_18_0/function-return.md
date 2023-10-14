## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,164,915|88|
|Function returning explicitly undefined|1,188,293|90|
|Function returning implicitly undefined|1,173,914|87|
|Function returning string|1,159,975|87|
|Function returning integer|1,157,917|84|
|Function returning float|1,172,789|85|
|Function returning functions|1,147,849|86|
|Function returning arrow functions|1,179,333|87|
|Function returning empty object|1,173,885|90|
|Function returning empty array|1,147,618|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","hz":1164915.4331034184,"cycles":5,"stats":{"deviation":6.52576111077138e-8,"mean":8.584314119145355e-7,"moe":1.3634710047104013e-8,"rme":1.5883284159761701,"sem":6.956484717910211e-9,"variance":4.258555807485612e-15}},{"name":"Function returning explicitly undefined","hz":1188293.0383114656,"cycles":6,"stats":{"deviation":3.774861334454164e-8,"mean":8.415432622755871e-7,"moe":7.798944316542828e-9,"rme":0.9267431237526614,"sem":3.979053222725933e-9,"variance":1.4249578094357069e-15}},{"name":"Function returning implicitly undefined","hz":1173913.9215762736,"cycles":4,"stats":{"deviation":5.3394924546463046e-8,"mean":8.518512146591203e-7,"moe":1.1220092108984333e-8,"rme":1.31714223281048,"sem":5.724536790298129e-9,"variance":2.8510179673224817e-15}},{"name":"Function returning string","hz":1159975.123514708,"cycles":5,"stats":{"deviation":5.809622787691148e-8,"mean":8.620874531946981e-7,"moe":1.2207996050191425e-8,"rme":1.4160971726187865,"sem":6.228569413362972e-9,"variance":3.375171693526027e-15}},{"name":"Function returning integer","hz":1157916.992829815,"cycles":6,"stats":{"deviation":5.935358823117846e-8,"mean":8.63619763931537e-7,"moe":1.269297450570872e-8,"rme":1.4697410869715746,"sem":6.476007400871796e-9,"variance":3.5228484359162867e-15}},{"name":"Function returning float","hz":1172788.9209042322,"cycles":6,"stats":{"deviation":6.711307655055778e-8,"mean":8.526683550429431e-7,"moe":1.4267693013296396e-8,"rme":1.6732992292856734,"sem":7.279435210865509e-9,"variance":4.5041650440810284e-15}},{"name":"Function returning functions","hz":1147848.5725373372,"cycles":7,"stats":{"deviation":5.6239679063080965e-8,"mean":8.711950547531582e-7,"moe":1.1886381892589013e-8,"rme":1.3643766488041953,"sem":6.064480557443374e-9,"variance":3.1629015011183475e-15}},{"name":"Function returning arrow functions","hz":1179333.1734010614,"cycles":4,"stats":{"deviation":5.748580070183465e-8,"mean":8.479368023847874e-7,"moe":1.2079724511494347e-8,"rme":1.4246019841951214,"sem":6.163124750762423e-9,"variance":3.3046172823310533e-15}},{"name":"Function returning empty object","hz":1173884.6964289045,"cycles":6,"stats":{"deviation":3.979477361757976e-8,"mean":8.518724224296626e-7,"moe":8.221685408685591e-9,"rme":0.9651310680108839,"sem":4.194737453411016e-9,"variance":1.5836240072744218e-15}},{"name":"Function returning empty array","hz":1147617.5917175354,"cycles":7,"stats":{"deviation":5.853071033347827e-8,"mean":8.71370400050587e-7,"moe":1.222921358446229e-8,"rme":1.4034460642399982,"sem":6.2393946859501484e-9,"variance":3.42584405214154e-15}}]}-->
