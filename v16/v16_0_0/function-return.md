## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,083,048|88|
|Function returning explicitly undefined|1,061,659|90|
|Function returning implicitly undefined|1,098,752|94|
|Function returning string|1,089,908|91|
|Function returning integer|1,113,053|94|
|Function returning float|1,089,018|92|
|Function returning functions|1,055,790|92|
|Function returning arrow functions|1,076,101|90|
|Function returning empty object|1,077,542|93|
|Function returning empty array|1,084,559|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1083047.6779156008,"cycles":6,"stats":{"deviation":3.6880608142526454e-8,"mean":9.23320385972821e-7,"moe":7.705712634104854e-9,"rme":0.834565417505217,"sem":3.931486037808599e-9,"variance":1.3601792569625884e-15}},{"name":"Function returning explicitly undefined","hz":1061658.903815173,"cycles":5,"stats":{"deviation":6.038881157119118e-8,"mean":9.419221149150674e-7,"moe":1.2476457730705445e-8,"rme":1.3245742437877084,"sem":6.3655396585231865e-9,"variance":3.646808562980833e-15}},{"name":"Function returning implicitly undefined","hz":1098751.9862920528,"cycles":8,"stats":{"deviation":3.788448133208352e-8,"mean":9.101234969091523e-7,"moe":7.658672354083493e-9,"rme":0.8414981461409269,"sem":3.907485894940557e-9,"variance":1.4352339258009845e-15}},{"name":"Function returning string","hz":1089907.5006072284,"cycles":6,"stats":{"deviation":4.470370736996902e-8,"mean":9.175090541563046e-7,"moe":9.184994841913709e-9,"rme":1.0010794771240454,"sem":4.6862218581192394e-9,"variance":1.9984214526198224e-15}},{"name":"Function returning integer","hz":1113053.196847898,"cycles":5,"stats":{"deviation":2.6491266897872587e-8,"mean":8.984296553228021e-7,"moe":5.3554364816805004e-9,"rme":0.596088569645034,"sem":2.7323655518778063e-9,"variance":7.017872218543198e-16}},{"name":"Function returning float","hz":1089018.3001718887,"cycles":7,"stats":{"deviation":3.791735225294049e-8,"mean":9.182582146160095e-7,"moe":7.748188197865238e-9,"rme":0.8437918740651091,"sem":3.953157243808795e-9,"variance":1.4377256018735715e-15}},{"name":"Function returning functions","hz":1055790.2814041297,"cycles":8,"stats":{"deviation":4.692157028796297e-8,"mean":9.471577998142468e-7,"moe":9.588147260527798e-9,"rme":1.012307269433688,"sem":4.891911867616224e-9,"variance":2.2016337582882495e-15}},{"name":"Function returning arrow functions","hz":1076100.708010871,"cycles":5,"stats":{"deviation":5.129833452942014e-8,"mean":9.29281053860154e-7,"moe":1.059834571603366e-8,"rme":1.14048873287678,"sem":5.407319242874316e-9,"variance":2.6315191254922985e-15}},{"name":"Function returning empty object","hz":1077542.3402744276,"cycles":8,"stats":{"deviation":3.5496751145091715e-8,"mean":9.28037778771014e-7,"moe":7.214449586436095e-9,"rme":0.7773874891160226,"sem":3.6808416257327017e-9,"variance":1.26001934185657e-15}},{"name":"Function returning empty array","hz":1084559.0871677145,"cycles":6,"stats":{"deviation":4.512699450691618e-8,"mean":9.220336741739563e-7,"moe":9.375565627644402e-9,"rme":1.0168354898799015,"sem":4.783451850838981e-9,"variance":2.036445633227243e-15}}]}-->
