## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|742,760,460|92|
|Length = 10_000 - Array.at|721,549,372|92|
|Length = 1_000_000 - Array.at|746,605,158|92|
|Length = 100 - Array[length - 1]|749,501,467|92|
|Length = 10_000 - Array[length - 1]|712,313,472|89|
|Length = 1_000_000 - Array[length - 1]|720,404,465|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":742760459.5930015,"cycles":8,"stats":{"deviation":5.895112417356526e-11,"mean":1.3463290716201478e-9,"moe":1.204631593275568e-11,"rme":0.8947527158616105,"sem":6.146079557528408e-12,"variance":3.4752350413271095e-21}},{"name":"Length = 10_000 - Array.at","hz":721549372.0758866,"cycles":6,"stats":{"deviation":6.665245966028805e-11,"mean":1.3859065487411001e-9,"moe":1.362003860009722e-11,"rme":0.9827530299549487,"sem":6.948999285763888e-12,"variance":4.442550378766325e-21}},{"name":"Length = 1_000_000 - Array.at","hz":746605158.0791011,"cycles":6,"stats":{"deviation":5.701044519645763e-11,"mean":1.3393960504811465e-9,"moe":1.1649749583766888e-11,"rme":0.869776312957022,"sem":5.943749787636168e-12,"variance":3.2501908614982986e-21}},{"name":"Length = 100 - Array[length - 1]","hz":749501466.7592814,"cycles":9,"stats":{"deviation":6.388069370977898e-11,"mean":1.3342202041629515e-9,"moe":1.3053644510084947e-11,"rme":0.9783725706862909,"sem":6.660022709227014e-12,"variance":4.080743028842595e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":712313471.7910709,"cycles":5,"stats":{"deviation":8.159860497056998e-11,"mean":1.4038762982897937e-9,"moe":1.6952892262935002e-11,"rme":1.2075773544711215,"sem":8.649434828028062e-12,"variance":6.658332333143129e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":720404464.6186366,"cycles":6,"stats":{"deviation":9.671476182362303e-11,"mean":1.3881091096921143e-9,"moe":2.009341872967865e-11,"rme":1.4475388562312235,"sem":1.0251744249836046e-11,"variance":9.353745154600132e-21}}]}-->
