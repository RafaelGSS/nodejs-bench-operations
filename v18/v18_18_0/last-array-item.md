## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,356,570|96|
|Length = 10_000 - Array.at|19,334,462|94|
|Length = 1_000_000 - Array.at|19,328,688|97|
|Length = 100 - Array[length - 1]|589,683,944|93|
|Length = 10_000 - Array[length - 1]|589,105,266|96|
|Length = 1_000_000 - Array[length - 1]|589,415,572|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":19356569.882253516,"cycles":6,"stats":{"deviation":4.853444334062847e-10,"mean":5.166204581095846e-8,"moe":9.708910725989129e-11,"rme":0.18793120894816928,"sem":4.953525880606698e-11,"variance":2.3555921903846747e-19}},{"name":"Length = 10_000 - Array.at","hz":19334461.982911915,"cycles":8,"stats":{"deviation":5.410928180305582e-10,"mean":5.17211185335188e-8,"moe":1.0938654722809312e-10,"rme":0.2114930038823565,"sem":5.580946287147608e-11,"variance":2.927814377242508e-19}},{"name":"Length = 1_000_000 - Array.at","hz":19328688.26504083,"cycles":5,"stats":{"deviation":4.4649851904117037e-10,"mean":5.1736568270319074e-8,"moe":8.885670957307334e-11,"rme":0.17174836395952037,"sem":4.533505590462925e-11,"variance":1.9936092750595836e-19}},{"name":"Length = 100 - Array[length - 1]","hz":589683944.0633514,"cycles":9,"stats":{"deviation":9.149234499831305e-12,"mean":1.6958236866842134e-9,"moe":1.8595135871368843e-12,"rme":0.10965253061022684,"sem":9.487314220086146e-13,"variance":8.37084919329034e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":589105266.2289438,"cycles":9,"stats":{"deviation":1.1844927863549256e-11,"mean":1.6974894935184135e-9,"moe":2.3694790599712632e-12,"rme":0.13958725924482787,"sem":1.2089178877404404e-12,"variance":1.4030231609268555e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":589415572.3421665,"cycles":7,"stats":{"deviation":9.050145786502405e-12,"mean":1.6965958263136652e-9,"moe":1.8104062074362864e-12,"rme":0.10670816109278698,"sem":9.23676636447085e-13,"variance":8.190513875694724e-23}}]}-->
